import style from "./start.module.css";
import logo from "../assets/logo.png"
import team from "../assets/team.png"

export default function Start() {
    return(
        <>
            <div className={style.main}>
                <div className={style.left}>
                    <p className={style.header}>
                        About:
                    </p>
                    <div className={style.li}>
                        <div className={style.line}></div>
                        <div className={style.line1}></div>
                    </div>
                        <div className={style.logo}>
                            <img src={logo} alt="jai mlsc" />
                        </div>
                </div>
                <div className={style.right}>
                    <div className={style.text}>
                        <span className={style.p1}>
                            (about MLSC)
                        </span>     
                        <p className={style.p2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat. Iste repudiandae eius temporibus doloribus eveniet? Quibusdam cum et atque minus aperiam deleniti at in hic odit exercitationem adipisci accusantium est, nesciunt repellat doloribus quia nisi, dolore consequuntur possimus reiciendis impedit cupiditate fuga expedita delectus? Exercitationem fuga magnam assumenda quam?
                        </p>
                    </div>
                    <div className={style.ima}>
                         
                           {/* <img src="{team}" alt="mlsc" /> */}
                        
                    </div>
                    <div className={style.li}>
                        <div className={style.line}></div>
                        <div className={style.line1}></div>
                    </div>
                    <div className={style.re}>
                        <div className={style.line}></div>
                        <div className={style.line1}></div>
                    </div>
                </div>
            </div>
        </>
    );
}