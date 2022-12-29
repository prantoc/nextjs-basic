import Image from "next/image";
import { useState } from "react";
import Info from "../component/Info";
import styles from '../styles/Home.module.css'
const myDetails = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-lg-4 pb-4 pb-lg-0">
                        <Image
                            className="img-fluid rounded w-100"
                            src="/profile.png"
                            alt="Profile Photo"
                            width={180}
                            height={37}
                            priority
                            onClick={() => setShow(!show)}
                        />
                    </div>
                    {show &&
                        <div className="col-lg-8">
                            <Info></Info>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default myDetails;