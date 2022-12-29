import Image from "next/image";
import { useState } from "react";
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
                            <h1>Hi, This is Pranto Chakraborty</h1>
                            <p >A passionate web developer. My core skill is based on React (frontend) and Laravel (backend) and I love to do most things using these technologies. I love to learn new technology, coding, play chess and cricket, travelling, listen to music, watch movies and tv series, and helps other. I graduated with a bachelor's degree in Computing from the University of Greenwich, in 2021. I am available for any kind of job opportunity that suits my interests.</p>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default myDetails;