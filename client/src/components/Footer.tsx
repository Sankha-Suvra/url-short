import React from 'react'

interface IFooterProps{

}

const Footer: React.FunctionComponent<IFooterProps> = () =>{
    return (
        <div className="bg-slate-900 text-base text-center text-white py-5">
            Copyright &#169; URLShortner | SANKHA
        </div>
    );
}

export default Footer