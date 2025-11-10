'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useAuthStore } from '@/store/authStore';

export default function PostDetail() {
  const { id } = useParams();
  const { user } = useAuthStore();
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
      setPost(res.data);
      setComments(res.data.comments || []);
    };
    fetchPost();
  }, [id]);

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}/comments`, {
      text,
      userId: user?.id || 1,
    });
    setText('');
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
    setComments(res.data.comments || []);
  };

  if (!post) return <p className="p-8">Cargando...</p>;

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">{post.content}</h1>

      <form onSubmit={handleComment} className="mb-6">
        <textarea
          className="border p-2 w-full rounded"
          placeholder="Escribe un comentario..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">
          Comentar
        </button>
      </form>

      <ul className="space-y-2">
        {comments.map((c, i) => (
          <li key={i} className="border p-2 rounded bg-white shadow-sm">
            {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
