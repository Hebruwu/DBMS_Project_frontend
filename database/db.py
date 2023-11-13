from sqlalchemy import CHAR, Column, DateTime, ForeignKeyConstraint, Index, Integer, String
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class ADMIN(Base):
    __tablename__ = 'ADMIN'

    AID = Column(Integer, primary_key=True)
    NAME = Column(String(250), nullable=False)
    USERNAME = Column(String(250), nullable=False, unique=True)
    PASSWORD = Column(String(1000), nullable=False)
    EMAIL = Column(String(250), nullable=False, unique=True)

    EVENT = relationship('EVENT', back_populates='ADMIN_')


class STUDENT(Base):
    __tablename__ = 'STUDENT'

    SID = Column(Integer, primary_key=True)
    GENDER = Column(CHAR(1), nullable=False)
    NAME = Column(String(250), nullable=False)
    USERNAME = Column(String(250), nullable=False, unique=True)
    PASSWORD = Column(String(1000), nullable=False)
    EMAIL = Column(String(250), nullable=False, unique=True)
    RACE = Column(String(250))
    DEPARTMENT = Column(String(250))
    MAJOR = Column(String(250))
    CITIZENSHIP = Column(String(250), nullable=False)
    YEAR = Column(String(250))

    INVITED_TO = relationship('INVITEDTO', back_populates='STUDENT_')
    PROVIDES_FEEDBACK = relationship('PROVIDESFEEDBACK', back_populates='STUDENT_')


class EVENT(Base):
    __tablename__ = 'EVENT'
    __table_args__ = (
        ForeignKeyConstraint(['E_AID'], ['ADMIN.AID'], name='EVENT_fk0'),
    )

    EID = Column(Integer, primary_key=True)
    NAME = Column(String(250), nullable=False)
    DATE_FROM = Column(DateTime, nullable=False)
    DATE_TO = Column(DateTime, nullable=False)
    EVENT_TYPE = Column(String(250), nullable=False)
    MODALITY = Column(String(250), nullable=False)
    LOCATION = Column(String(500), nullable=False)
    E_AID = Column(Integer, nullable=False, index=True)
    DESCRIPTION = Column(String(1000))

    ADMIN_ = relationship('ADMIN', back_populates='EVENT')
    INVITED_TO = relationship('INVITEDTO', back_populates='EVENT_')
    PROVIDES_FEEDBACK = relationship('PROVIDESFEEDBACK', back_populates='EVENT_')


class INVITEDTO(Base):
    __tablename__ = 'INVITED_TO'
    __table_args__ = (
        ForeignKeyConstraint(['I_EID'], ['EVENT.EID'], name='INVITED_TO_fk1'),
        ForeignKeyConstraint(['I_SID'], ['STUDENT.SID'], name='INVITED_TO_fk0')
    )

    I_SID = Column(Integer, primary_key=True, nullable=False)
    I_EID = Column(Integer, primary_key=True, nullable=False, index=True)
    ATTENDING = Column(String(3))

    EVENT_ = relationship('EVENT', back_populates='INVITED_TO')
    STUDENT_ = relationship('STUDENT', back_populates='INVITED_TO')


class PROVIDESFEEDBACK(Base):
    __tablename__ = 'PROVIDES_FEEDBACK'
    __table_args__ = (
        ForeignKeyConstraint(['P_EID'], ['EVENT.EID'], name='PROVIDES_FEEDBACK_fk1'),
        ForeignKeyConstraint(['P_SID'], ['STUDENT.SID'], name='PROVIDES_FEEDBACK_fk0')
    )

    P_SID = Column(Integer, primary_key=True, nullable=False)
    P_EID = Column(Integer, primary_key=True, nullable=False, index=True)
    FEEDBACK = Column(String(1000), nullable=False)

    EVENT_ = relationship('EVENT', back_populates='PROVIDES_FEEDBACK')
    STUDENT_ = relationship('STUDENT', back_populates='PROVIDES_FEEDBACK')