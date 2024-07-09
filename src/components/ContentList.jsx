import Content from "./Content";

export default function ContentList({content}){
    return(
        <section className="w-screen">
            <div className="flex flex-col gap-5">
            {content.map((content)=>(
                <Content
                    key={content.id}
                    content={content}
                />
            ))
        };
            </div>
        </section>
        // console.log(content)
    );
}
