import { useQuery } from "@tanstack/react-query";

// Định nghĩa kiểu dữ liệu cho dữ liệu trả về từ API
interface Post {
    id: number;
    title: string;
    body: string;
}

// Hàm lấy dữ liệu từ API
const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default function UseQuery() {
    // Sử dụng useQuery để lấy danh sách các bài đăng
    const { data, isLoading, error } = useQuery<Post[]>({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        refetchInterval: 5000,  // Refetch mỗi 5 giây
        refetchOnWindowFocus: true, // Refetch khi người dùng quay lại tab
        //      onSuccess: (data) => {
        //     console.log('Fetch thành công:', data);
        // },
        // onError: (error) => {
        //     console.error('Fetch thất bại:', error);
        // },
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (error instanceof Error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Danh sách bài đăng</h1>
            <ul>
                {data?.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
