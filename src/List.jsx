


export default function List({Data}) {


  return (
    
    <div>
        {Data.map((item,inedex)=>{
            return <h1 key={inedex} > <span>{inedex}.</span> {item.title}</h1>

        })}

      
    </div>
  );
}
