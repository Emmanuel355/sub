'use client'
import { FormEvent, useState } from "react";
import { makeRequest } from "@/miscelleneous/request";
import {ResponseInterface} from "@/miscelleneous/interfaces";
import {useRouter} from "next/navigation";



export default function AddForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter()

    const [response, setResponse] = useState<ResponseInterface>({});

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const data = {
            name,
            email,
            description,
        };

        const res = await makeRequest('/api/user', 'POST', data);

        if (res.status == 'success'){
            router.push('/')
        }

        setResponse(res);
    }

    return (
        <div>
            {response.status === 'error' ? (
                <div className="alert alert-danger" role="alert">
                    {response.data}
                </div>
            ) : (
                ''
            )}
            <div
                className="card mx-auto my-5"
                style={{ maxWidth: '400px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            >
                <div className="card-header bg-dark text-white">
                    <h5>Add Data</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-control"
                                id="description"
                                placeholder="Enter your description"
                            ></textarea>
                        </div>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="btn btn-dark"
                        >
                            Add Data
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
