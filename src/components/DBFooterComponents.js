import logo from '../assets/images/text_logo.png';

const DBFooterComponents = () => {
    return (
        <div className="dbfooter">
            <div className="dbfooter__logo">
                <img src={logo} alt="coffee station logo"></img>
                <div className='dbfooter__logo--text'>가맹문의</div>
            </div>
            <div className='dbfooter__input'>
                <div className='dbfooter__input--info'>
                    <input></input>
                    <input></input>
                    <input></input>
                </div>
                <div className='dbfooter__input--checkbox'>
                    <input type='checkbox' id='personalInfoCheckbox'></input>
                    <label htmlFor='personalInfoCheckbox'>개인정보 수집 동의</label>
                </div>
                <button>문의하기</button>
            </div>
            <div className='dbfooter__tel'>
                <div className='dbfooter__tel--text'>가맹문의</div>
                <div className='dbfooter__tel--number'>1588-1234</div>
            </div>
        </div>
    )
}

export default DBFooterComponents;