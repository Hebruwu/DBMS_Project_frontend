import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h2>Introduction</h2>
            <p>
                In the current landscape of event management at the University/Department level, a notable absence of a centralized application poses challenges for both organizers and participants. Taking the recent career fairs hosted by the Computer Science department at Virginia Tech as an example, the reliance on email communication through listservs with different registration links creates suboptimal conditions. Students struggle to locate relevant information amid the deluge of emails, leading to potential oversights and missed opportunities.
            </p>
            <p>
                Moreover, the lack of a unified system makes event statistics collection a cumbersome task, hindering effective evaluation and improvement. To address these issues, our proposed solution involves the creation of an event management database system for the university. This system will not only store event data but also include student information such as majors, programs, and registered courses. The front-end and middle-tier systems built on this database will empower faculty and staff to send targeted event invitations based on specific parameters, enhancing communication efficiency. Students, in turn, will have a user-friendly platform to mark their attendance, streamlining the entire process.
            </p>

            <h2>Prior Work</h2>
            <p>
                While platforms like Gobblerconnect address aspects of event management, they fall short in catering to the nuanced needs of university-level event coordination. Gobblerconnect primarily focuses on organizations and open events, lacking the ability to filter students by major or program. The platform necessitates students' registration into organizations to receive event notifications, introducing a redundancy akin to the email overload problem. Unlike our proposed solution, Gobblerconnect lacks student data, preventing effective grouping based on majors or other relevant criteria for targeted event notifications.
            </p>

            <h2>Preliminary Design</h2>
            <p>
                Our plan involves the use of a Relational Database Management System (RDBMS) such as Oracle or MySQL hosted on a single AWS EC2 instance. AWS Lambda, coupled with Python scripts on a basic framework, will serve as the middle-tier API for data retrieval. If time permits, we aim to develop a front-end interface using a straightforward JavaScript framework. While team members are well-versed in RDBMS systems and API creation on AWS, the front-end development aspect presents a learning curve.
            </p>

            <h2>Testing</h2>
            <p>
                To ensure the robustness of our system, we plan to implement unit tests to verify the correctness of components interacting with the database. Acceptance testing, critical for this proof of concept, will be conducted by team members using synthetically generated data. Additionally, a beta version will be advertised on Piazza for classmates to provide valuable feedback, facilitating iterative refinement.
            </p>
            <p>
                Despite the team's unfamiliarity with data generation for databases, a dedicated effort will be made to explore tools and techniques necessary for comprehensive testing and validation of the proposed system.
            </p>
        </div>
    );
};

export default About;
