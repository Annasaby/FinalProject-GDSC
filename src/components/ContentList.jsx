import Content from "./Content";

export default function ContentList({content,cardShow}){
    console.log(cardShow);

    return(
        <section className="overflow-x-hidden w-screen py-5 px-20">
            <div className="flex flex-col gap-5">
            {content.map((content)=>(
                <Content
                    key={content.id}
                    content={content}
                    cardShow={cardShow}
                />
            ))}
            </div>
        </section>
        // console.log(content)
    );
}
