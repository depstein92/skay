import pg from 'pg';

 export const database = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

/*=============PG COMMANDS==============*/

const addAppoinmentSQL ='INSERT INTO appointment (id, email, firstName, lastName) VALUES ($1, $2, $3, $4)';


/*=============PG HELPER FUNCTIONS==============*/

export const addAppointment = ({ id, email, firstName, lastName}) => {
  let addAppointmentInfo = [ id, email, firstName, lastName ];
  console.log('this is appoint', addAppointmentInfo);
  database.query(addAppoinmentSQL, addAppointmentInfo, callback, () => {
   callback(appointmentInfo);
  })
}
