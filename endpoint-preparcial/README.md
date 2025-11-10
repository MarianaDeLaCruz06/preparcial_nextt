# Mock Banner Server for Integrative Project

This server is a mock API designed to simulate a banner system for capstone project 2. It allows `GET` requests to fetch curriculum information. Before accessing the information, users must first authenticate via the login endpoint.

## Getting Started

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install necessary dependencies (if any are required).

### Installation

1. Clone the repository:
   ```git clone [repository-url]```

2. Navigate to the project directory:
   ```cd [project-directory]```

3. Install the required packages:
   ```yarn install```

4. Start the server:
   ```yarn start```

## API Endpoints

### Login

Before accessing any other endpoints, you must first authenticate.

- **URL**: [http://localhost:8000/ic_rest_interfaces_test/api/login/]
- **Method**: `POST`
- **Body**:
  - `username`: "user_test"
  - `password`: "user_pass"
- **Response**: 
  - **Success**: Returns a token to be used for subsequent requests.
  - **Error**: Error message.

### Example fetch Courses

Retrieve a list of all courses.

- **URL**: [http://localhost:8000/ic_rest_interfaces_test/api/courses]
- **Method**: `GET`
- **Headers**:
  - `Authorization`: [Bearer [your-token]]
- **Response**: 
  - **Success**: Returns a list of courses.
  - **Error**: Error message.

## Usage

1. First, login to get your token:
   ``` curl -X POST 'http://localhost:8000/ic_rest_interfaces_test/api/login' --header 'Content-Type: application/json' --data-raw '{   "username": "user_test", "password": "user_pass" }' ```

2. Use the token to fetch courses:
   ```curl -H "Authorization: Bearer [your-token]" http://localhost:8000/ic_rest_interfaces_test/api/courses```

## Contributing

If you'd like to contribute, please fork the repository and create a new branch, then submit a pull request.

## License

This project is licensed under the MIT License.

# How to generate data quickly

The data can be easily generated with [json generator](https://json-generator.com/), but it is necessary to define well the elements that are going to be generated.

## Example

The following code was used for generate academic programs:

```json
[
  '{{repeat(10)}}',
  {
    acpId: '{{objectId()}}',
    acpIsActive: function (tags) {
      var options = ['Y', 'N'];
      return options[tags.integer(0, options.length - 1)];
    },
    acpProgDescEng: '{{lorem(1, "paragraphs")}}',
    acpProgDescSpa: '{{lorem(1, "paragraphs")}}',
    acpProgNameEng: '{{company().toUpperCase()}}',
    acpProgNameSpa: '{{company().toUpperCase()}}',
    acpSnies: '{{integer(1000, 9999)}}',
    courses: [
      '{{repeat(10)}}',
      {
        id: '{{objectId()}}'
      }
    ],
    faculty: [
      '{{repeat(10)}}',
      {
        id: '{{objectId()}}'
      }
    ],
    acadProgCurriculums: [
      '{{repeat(10)}}',
      {
        id: '{{objectId()}}'
      }
    ]
  }
]
```

The following code was used for generate faculties:

```json
[
  '{{repeat(5)}}',
  {
    facId: '{{integer(1000000000, 9999999999)}}',
    facIsActive: '{{bool()}}',
    facNameEng: '{{company().toUpperCase()}}',
    facNameSpa: '{{company().toUpperCase()}}',
    acadPrograms: [
      '{{repeat(2)}}',
      {
        id: '{{objectId()}}'
      }
    ],
    dean: '{{integer(1000000000, 9999999999)}}'
  }
]
```
