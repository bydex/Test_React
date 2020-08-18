import React from "react";
import classes from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Сообщения</h1>
      <div className="wrapper">
        <Message
          messImg="https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg"
          messTitle="Диана Жулаева"
          messStatus="Online"
          parentClass={classes.item} />
        <Message
          messImg="https://steamuserimages-a.akamaihd.net/ugc/793108229627733289/C9AAA61BD8D6BB5A4A04BE56C6BC3F408440BED5/"
          messTitle="Максим Федулов"
          messStatus="Offline"
          parentClass={classes.item} />
        <Message
          messImg="https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%B2-%D0%92%D0%9A011.jpg"
          messTitle="Николай Аникеев"
          messStatus="Online"
          parentClass={classes.item} />
        <Message
          messImg="https://wegamers.176.com/GameIM/SNS/Image/20243059801580720092687308"
          messTitle="Миржакып Дулатов"
          messStatus="Online"
          parentClass={classes.item} />
        <Message
          messImg="https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B3%D1%82%D0%B0-5-%D0%B4%D0%BB%D1%8F-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-021.jpg"
          messTitle="Тимофей Белоусов"
          messStatus="Online"
          parentClass={classes.item} />
        <Message
          messImg="https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png"
          messTitle="Андрей Журавлев"
          messStatus="Online"
          parentClass={classes.item} />
      </div>
    </div>
  );
};

export default Messages;
