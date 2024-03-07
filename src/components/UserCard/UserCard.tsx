import "./style.css";
import {User} from "../types/User.ts";
import {FC} from "react";

interface Props {
    user: User
}

export const UserCard: FC<Props> = ({user}) => {

    return (
        <div className="userCard">
            <img className="userPic" src={user.image}/>
            <div className="userInfo">
                <div>{`${user.firstName} ${user.lastName}`}</div>
                <div>{user.address.city}</div>
            </div>
        </div>
    );
}
