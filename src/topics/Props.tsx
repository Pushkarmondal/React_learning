
interface PropsType {
    userdetails: {
        name: string;
        age: number;
        address: string;
    }
}
export function Props({userdetails }: PropsType) {
    return (
        <div>
            <h1>{userdetails.name}</h1>
            <h1>{userdetails.age}</h1>
            <h1>{userdetails.address}</h1>
        </div>
    )
}