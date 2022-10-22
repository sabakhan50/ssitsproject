var array1=[
    {
        "id":1,
        "first_name":"Valera",
        "last_name":"Pinsent",
        "email":"vpinsent0@google.co.jp",
        "gender":"Male",
        "ip_address":"253.171.63.171"
    },

    { "id":2,
    "first_name":"Kenneth",
    "last_name":"Hinemoor",
    "email":"khinemoor1@yellowbook.com",
    "gender":"Polygender",
    "ip_address":"50.231.58.150"
    },
    {
        "id":3,
        "first_name":"Roman",
        "last_name":"Sedcole",
        "email":"rsedcole2@addtoany.com",
        "gender":"Genderqueer",
        "ip_address":"236.52.184.83"
    },
{
    "id":4,"first_name":"Lind","last_name":"Ladyman","email":"lladyman3@wordpress.org","gender":"Male","ip_address":"118.12.213.144"},
 {
    "id":5,"first_name":"Jocelyne","last_name":"Casse","email":"jcasse4@ehow.com","gender":"Agender","ip_address":"176.202.254.113"},
 { 
    "id":6,"first_name":"Stafford","last_name":"Dandy","email":"sdandy5@exblog.jp","gender":"Female","ip_address":"111.139.161.143"},
 {
    "id":7,"first_name":"Jeramey","last_name":"Sweetsur","email":"jsweetsur6@youtube.com","gender":"Genderqueer","ip_address":"196.247.246.106"},
 {
    "id":8,"first_name":"Anna-diane","last_name":"Wingar","email":"awingar7@auda.org.au","gender":"Agender","ip_address":"148.229.65.98"},
 {
    "id":9,"first_name":"Cherianne","last_name":"Rantoul","email":"crantoul8@craigslist.org","gender":"Genderfluid","ip_address":"141.40.134.234"},

    {
        "id":10,"first_name":"Nico","last_name":"Dunstall","email":"ndunstall9@technorati.com","gender":"Female",
        "ip_address":"37.12.213.144"}] ;



// 1. Find all people who are Agender
array1.map(
    (val)=>{
        if(val.gender == "Agender"){
           console.log(val.first_name);
        }
    }
)


//2. Split their IP address into their components eg. 111.139.161.143 has components [111, 139, 161, 143]
array1.map(
    (val)=>{
        const c=val.ip_address.split(".");
           console.log(c);
        }    
)

// 3. Find the sum of all the second components of the ip addresses.
var a=0;
array1.map(
    (val)=>{
        const c=parseInt(val.ip_address.split('.')[1]);
        a+=c;
    }
)
console.log(a);

// 3. Find the sum of all the fourth components of the ip addresses.
var x=0;
array1.map(
    (val)=>{
        const y=parseInt(val.ip_address.split('.')[3]);
        x+=y;
    }
)
console.log(x);


// 4. Compute the full name of each person and store it in a new key (full_name or something) for each person.
array1.map(
    (val)=>{
        val.full_name=val.first_name+ " "+val.last_name;
       // console.log(val.full_name)
    }
)
console.log(array1);


// 5. Filter out all the .org emails
array1.filter(
    (v)=>{
        const e=v.email.includes(".org");
        if(e == true){
        console.log(v);
        }
    }
)

// 6. Sort the data in descending order of first name

let sarray1 = array1.sort(function(a,b){
    return b.first_name.localeCompare(a.first_name);
})
console.log(sarray1);
