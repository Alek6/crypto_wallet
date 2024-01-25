import MainLayout from "@layouts/MainLayout";
import Header from "@molecules/Header";
import Accordion from "@atoms/Accordion";

export default function Support() {
    const accordionData = [
        {
            title: 'What is Bitcoin',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
            reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
            quaerat iure quos dolorum accusantium ducimus in illum vero commodi
            pariatur? Impedit autem esse nostrum quasi.`
        },
        {
            title: 'Is there any risk',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
                    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
                    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
                    pariatur? Impedit autem esse nostrum quasi.`
        },
        {
            title: 'How can a buy Bitcoin?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
                    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
                    dolor ut sequi minus iste? Quas?`
        }
      ];

    return (
        <MainLayout header={<Header type="action" title="FAQ" mt="lg" backTo="/profile"/>}>
            <div className="flex flex-col">
                {accordionData.map((accordion, index) => <Accordion key={index} title={accordion.title} content={accordion.content} />)}
            </div>
        </MainLayout> 
    )
}