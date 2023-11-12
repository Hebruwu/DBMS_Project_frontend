import datetime
import sqlalchemy as database
from sqlalchemy.orm import Session
from db import EVENT
from typing import Optional


def get_engine():
    connection_url = "mysql+pymysql://root:CSD%40mysql-1872@localhost:3306/eventhosting"
    engine = database.create_engine(connection_url, echo=True)
    return engine

def insert_event(engine,
                 q_name: str,
                 q_date_from: datetime.datetime,
                 q_date_to: datetime.datetime,
                 q_e_type: str,
                 q_modality: str,
                 q_location: str,
                 q_E_AID: int,
                 q_description: Optional[str]) -> None:
      event = EVENT(NAME=q_name,
                    DATE_FROM=q_date_from,
                    DATE_TO=q_date_to,
                    EVENT_TYPE=q_e_type,
                    MODALITY=q_modality,
                    LOCATION=q_location,
                    E_AID=q_E_AID,
                    DESCRIPTION=q_description)
      #Session = sessionmaker(engine)
      with Session(engine) as session:
           session.add(event)
           session.commit()
        

def main():
    engine = get_engine()
    insert_event(engine,
                 "testgevent",
                 datetime.datetime.now(),
                 datetime.datetime.now(),
                 "research",
                 "online",
                 "now",
                 1,
                 "testr")
if __name__ == "__main__":
    main()
    

