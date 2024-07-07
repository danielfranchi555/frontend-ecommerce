import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div className="border border-white  rounded-full">
      <Avatar>
        <AvatarFallback>DF</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Profile;
