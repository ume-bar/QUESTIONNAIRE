import React, { FC, useState } from 'react';
import FormItem from '../pages/FormItem';
import TextareaComp from '../pages/TextareaComp';
import InputComp from '../pages/InputComp';
import ChackboxContainer from '../pages/ChackboxContainer';


const ContactForm: FC = () => {
  const [ state, setState ] = useState({
    comment: '商品名やお問い合わせ内容を入力ください',
    last_name: '',
    first_name: '',
    last_name_kana: '',
    first_name_kana: '',
    email: '',
  });

  const clearAllInputValue = () => {
    setState({
      comment: '',
      last_name: '',
      first_name: '',
      last_name_kana: '',
      first_name_kana: '',
      email: ''
    });
  };

  // お問い合わせ項目のリストを作成
  const checkList = ["商品について","返品交換について","その他お問い合わせ"];

  // お問い合わせ内容に関するonChangeハンドラ
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.persist();
    setState((prevState) => {
      return {...prevState,  comment: e.target.value };
    });
  }

  // お問い合わせ内容、氏名・氏名（フリガナ）・メールアドレスに関するonChangeハンドラ
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const target = e.target;
    const name = target.name;
    setState(() => {
      return {...state, [name]: target.value };
    });
  }

  // 送信ボタンを押下したら発火
  const submitAlert = (e: React.MouseEvent) => {
    e.persist();
    e.preventDefault();
    const error = Object.values(state).some((value) => {
      return value.length === 0;
    });

    if(error) {
      alert('未入力項目があります');
    } else {
      alert('送信します');
    }

  };

  return (
    <>
      <h1>ご購入後のお問い合わせはこちら</h1>
      <form>
        <div>
          <div>
            <FormItem title='お問い合わせ項目' required={true}></FormItem>
          </div>
          <ChackboxContainer name="about" value={checkList}/>
        </div>
        <hr></hr>
        <div>
          <div>
            <FormItem title='お問い合わせ内容' required={true}></FormItem>
          </div>
          <TextareaComp name="お問い合わせ内容" value={state.comment} onChange={onChangeHandler}/>
        </div>
        <hr></hr>
        <div>
          <div>
            <FormItem title='お名前' required={true}></FormItem>
          </div>
          <div>
            <p>姓<InputComp name="last_name" value={state.last_name} onChange={handleInputChange}/></p>
            <p>名<InputComp name="first_name" value={state.first_name} onChange={handleInputChange}/></p>
          </div>
        </div>
        <hr></hr>
        <div>
          <div>
            <FormItem title='フリガナ' required={true}></FormItem>
          </div>
          <div>
          <p>セイ<InputComp name="last_name_kana" value={state.last_name_kana} onChange={handleInputChange}/></p>
          <p>メイ<InputComp name="first_name_kana" value={state.first_name_kana} onChange={handleInputChange}/></p>
          </div>
        </div>
        <hr></hr>
        <div>
          <div>
            <div>
              <FormItem title='メールアドレス' required={true}></FormItem>
            </div>
          </div>
          <p><InputComp name="email" value={state.email} onChange={handleInputChange}/></p>
        </div>
      </form>
      <div>
        <button onClick={clearAllInputValue}>入力内容をクリア</button>　<button onClick={submitAlert}>送信</button>
      </div>
    </>
  );
};

export default ContactForm;
