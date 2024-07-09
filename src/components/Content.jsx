export default function Content({content}){
    return(
        <div className=" p-5">
            <p>{content.creator}</p>
            <img src={content.img} alt="foto postingan" />
            <p>{content.caption}</p>
        </div>
    );
}