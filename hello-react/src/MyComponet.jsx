import PropsTypes from 'prop-types'

const MyComponet = ({name, children})=>{
    return(
    <div>안녕하세요, 제 이름은 {name}입니다.<br/>
        children의 값은 {children}
    </div>); 
}

MyComponet.defaultProps ={
    name : 'defalut Props'
}
{/* 무조건 string형태로 전달해야한다는 의미 */}
MyComponet.PropsTypes = {
    name : PropsTypes.string
}

export default MyComponet