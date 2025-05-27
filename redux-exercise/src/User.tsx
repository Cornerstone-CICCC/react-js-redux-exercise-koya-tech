import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAge, setFirstname, setLastname } from "./UserSlice";
import type { RootState } from "./store";

const User: React.FC = () => {
    const dispatch = useDispatch();
    const firstname = useSelector((state: RootState) => state.user.firstname);
    const lastname = useSelector((state: RootState) => state.user.lastname);
    const age = useSelector((state: RootState) => state.user.age);

    return (
        <div>
            <h2>User Component</h2>
            <div>Firstname: {firstname}</div>
            <div>Lastname: {lastname}</div>
            <div>Age: {age}</div>
            <button onClick={() => dispatch(incrementAge())}>
                Increment Age
            </button>
            <div>
                <input
                    type="text"
                    placeholder="Firstname"
                    value={firstname}
                    onChange={(e) => dispatch(setFirstname(e.target.value))}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Lastname"
                    value={lastname}
                    onChange={(e) => dispatch(setLastname(e.target.value))}
                />
            </div>
        </div>
    );
};

export default User;
