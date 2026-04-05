function MyInputText({
    mylabel,
    mytype = "text",
    myname,
    myvalue,
    myplaceholder = "",
    myOnChange,
  }) {
    return (
      <div>
        <label>{mylabel}</label>
        <br />
        <input
          type={mytype}
          name={myname}
          value={myvalue}
          placeholder={myplaceholder}
          onChange={myOnChange}
        />
      </div>
    );
  }
  
  export default MyInputText;