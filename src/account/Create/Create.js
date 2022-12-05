import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const Create = () => {
    const { user } = useContext(AuthContext)
    return (

        <div className="hero-content flex-col">
            <div className="flex-shrink-0 w-full bg-base-100">
                <div className="card-body">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">M-Book Name</span>
                        </label>
                        <input type="text" placeholder="Enter m-book name" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} className="input input-bordered" disabled />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user.email} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 w-full">
                        <button className="btn btn-primary">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;