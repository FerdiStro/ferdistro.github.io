import React from "react";

interface AgeProps {
    birthDate: string;
}

const Age: React.FC<AgeProps> = ({ birthDate }) => {
    const calcAge = (dateString: string) => {
        const birth = new Date(dateString);
        const now = new Date();
        let age = now.getFullYear() - birth.getFullYear();
        const m = now.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    return <time dateTime={birthDate}>{calcAge(birthDate)}</time>;
};

export default Age;
