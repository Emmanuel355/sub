
export default interface User{
    id: string
    name: string
    email: string
    description: string

}

export interface ResponseInterface {
    status?: string;
    data?: any;
}