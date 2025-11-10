'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';

export default function FeedPage() {
  const { token, user, logout } = useAuthStore();
  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts(res.data);
      } catch (err) {
        console.error('Error obteniendo posts', err);
      }
    };

    fetchPosts();
  }, [token, router]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Feed de publicaciones</h1>
      <p className="mb-4">Bienvenido, <strong>{user}</strong></p>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded mb-6">
        Cerrar sesión
      </button>

      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="border p-3 rounded">
            {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
