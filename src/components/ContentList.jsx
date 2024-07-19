import Content from "./Content";

export default function ContentList({content,cardShow}){
    // console.log(cardShow);

    return(
        <section className="overflow-hidden w-screen pt-10 md:pt-20 py-5 px-20">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
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
