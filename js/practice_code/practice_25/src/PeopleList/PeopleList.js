import DataComponent from '../hoc/DataComponent';

const PeopleList = ({data}) => (
   <ol>
         {data.results.map((person, i) => { 
            const {first, last} = person.name;
            return <li key={i}>{first} {last}</li>
         })}
      </ol>
)

export default DataComponent(PeopleList, "https://randomuser.me/api/")