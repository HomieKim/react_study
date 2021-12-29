import { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color'

const ColorBox = () =>{
    // **Consumer사용 방식
    // return (
    //     <ColorConsumer>
    //     {({state}) => (
    //         <>
    //             <div
    //                 style={{
    //                     width: '64px',
    //                     height : '64px',
    //                     background: state.color
    //                 }}
    //             />
    //             <div
    //                 style={{
    //                     width: '32px',
    //                     height : '32px',
    //                     background: state.subcolor
    //                 }}
    //             />
    //         </>
    //     )}
    //     </ColorConsumer>
            
        
    // );

    // useContext사용
    const {state} = useContext(ColorContext);
    return (
        <>
            <div
                    style={{
                        width: '64px',
                        height : '64px',
                        background: state.color
                    }}
                />
                <div
                    style={{
                        width: '32px',
                        height : '32px',
                        background: state.subcolor
                    }}
                />    
        </>
    )


};


export default ColorBox