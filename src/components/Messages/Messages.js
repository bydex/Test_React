import React from "react";
import classes from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = () => {

    const profiles = [
        {
            id: 1,
            name: 'Диана Жулаева',
            img: 'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg',
            status: 'online',
        },
        {
            id: 2,
            name: 'Максим Федулов',
            img: 'https://steamuserimages-a.akamaihd.net/ugc/793108229627733289/C9AAA61BD8D6BB5A4A04BE56C6BC3F408440BED5/',
            status: 'offline',
        },
        {
            id: 3,
            name: 'Николай Аникеев',
            img: 'https://sun9-45.userapi.com/impf/c845021/v845021398/179535/RtUN-sDNYLk.jpg?size=100x0&quality=88&crop=158,87,694,694&sign=f6232dfd3b9b271912c247b79d194364&ava=1',
            status: 'online',
        },
        {
            id: 4,
            name: 'Миржакып Дулатов',
            img: 'https://wegamers.176.com/GameIM/SNS/Image/20243059801580720092687308',
            status: 'online',
        },
        {
            id: 5,
            name: 'Тимофей Белоусов',
            img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B3%D1%82%D0%B0-5-%D0%B4%D0%BB%D1%8F-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-021.jpg',
            status: 'online',
        },
        {
            id: 6,
            name: 'Андрей журавлев',
            img: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png',
            status: 'online',
        },
        {
            id: 7,
            name: 'Владимир Порох',
            img: 'https://avatars2.githubusercontent.com/u/43727964?s=460&u=d7015a7517a9309368c4cee5cc3a5a184d3e22a6&v=4',
            status: 'online',
        },
    ];

    const profilesResult = profiles.map((el) => {
        return (
            <Message
                messImg={el.img}
                messTitle={el.name}
                messStatus={el.status}
                parentClass={classes.item} />
        )
    });

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Сообщения</h1>
      <div className={classes.inner}>
          <div className={classes.messages}>
              { profilesResult }
          </div>
          <div className={classes.detail}>
              <div className={classes.header}>
                  <div className={classes.info}>
                      <h3 className={classes.name}>Владимир порох</h3>
                      <p className={classes.status}>online</p>
                  </div>
              </div>

              <ul className={classes.body}>
                  <li className={classes.item}>
                      <div className={classes.img}>
                          <img src="https://avatars2.githubusercontent.com/u/43727964?s=460&u=d7015a7517a9309368c4cee5cc3a5a184d3e22a6&v=4" alt=""/>
                      </div>
                      <div className={classes.bodyWrapper}>
                          <h4 className={classes.bodyName}>
                              Владимир порох
                          </h4>
                          <div className={classes.bodyText}>
                              Привет) <br />
                              Поправляйся) <br />
                              Если вдруг будут какие вопросы по фронту можешь мне писать, помогу чем смогу
                          </div>
                      </div>
                  </li>
                  <li className={`${classes.item} ${classes.itemMe}`}>
                      <div className={classes.bodyWrapper}>
                          <div className={classes.bodyText}>
                              Привет, спасибо)<br />
                              <br />
                              У меня кстати ещё вчера вопрос появился, хотел тебе задать, ибо у тебя как раз опыт с жс хороший
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  );
};

export default Messages;
