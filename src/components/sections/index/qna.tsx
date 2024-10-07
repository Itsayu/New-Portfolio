
// import React, {useState} from 'react';
// import Section from '../../structure/section';
// import Container from '../../structure/container';
// import SectionTitle from '../../blocks/section.title';
// import career from '../../../styles/scss/sections/index/career.module.scss';
// import qna from '../../../../src/content/index/qna.json';

// interface QnAItem {
//     question: string;
//     answer: string;
//     isOpen: boolean;
// }

// const QnA: React.FC = () => {
//     const [qnas, setQnas] = useState<QnAItem[]>(qna);

//     const toggleAnswer = (index: number) => {
//         setQnas((prevState) => {
//             const updatedQnas = [...prevState];
//             updatedQnas[index].isOpen = !updatedQnas[index].isOpen;
//             return updatedQnas;
//         });
//     };

//     return (
//         <Section classProp={`${career.section} borderBottom`}>
//             <Container spacing={['verticalXXXLrg']}>
//                 <SectionTitle title="Q & A" preTitle="" subTitle="Get your Questions answered." />

//                 <div className={career.area}>
//                     {qnas.map((qna, index) => (
//                         <div key={index} className={career.company}>
//                             <div
//                                 className={career.companyContent}
//                                 style={{ cursor: 'pointer', fontWeight: 'bold' }}
//                                 onClick={() => toggleAnswer(index)}
//                             >
//                                 {qna.question}
//                             </div>
//                             {qna.isOpen && <div className={career.companyContent}>{qna.answer}</div>}
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </Section>
//     );
// };

// export default QnA;










import React, { useState } from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import career from '../../../styles/scss/sections/index/career.module.scss';
import qna from '../../../../src/content/index/qna.json';

interface QnAItem {
    question: string;
    answer: string;
}

const QnA: React.FC = () => {
    // State to keep track of the currently open QnA item
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        // If the clicked item is already open, close it; otherwise, set it as the open item
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle title="Q & A" preTitle="" subTitle="Get your Questions answered." />

                <div className={career.area}>
                    {qna.map((qnaItem, index) => (
                        <div key={index} className={career.company}>
                            <div
                                className={career.companyContent}
                                style={{ cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                                onClick={() => toggleAnswer(index)}
                            >
                                <span>{qnaItem.question}</span>
                                <span>{openIndex === index ? '▲' : '▼'}</span> {/* Arrow icon */}
                            </div>
                            {openIndex === index && (
                                <div className={career.companyContent}>{qnaItem.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default QnA;
