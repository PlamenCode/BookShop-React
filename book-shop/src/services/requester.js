const requester = async (method, url, data) => {
    const options = {};

    if(method !== 'GET'){
        options.method = method;

        if(data){
            options.headers ={
                'Content-Type': 'application/json',
            };
            
            options.body = JSON.stringify(data);
        }
    }

    const serializedAuth = localStorage.getItem('auth');
    if(serializedAuth){
        const auth = JSON.parse(serializedAuth);
        if(auth.accessToken){
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken
            }
        }
    }

    const responce = await fetch(url, options);
    
    if(responce.status === 204){ return {} };
    
    const result = await responce.json(); 

    if(!responce.ok) { throw result };

    return result;    

}

export const requestFactory = () => {
    return{
        get: requester.bind( null, 'GET' ),
        post: requester.bind( null, 'POST' ),
        put: requester.bind( null, 'PUT' ),
        patch: requester.bind( null, 'PATCH' ),
        delete: requester.bind( null, 'DELETE' ),
    }
};

export const request = requestFactory(localStorage.getItem('auth'))