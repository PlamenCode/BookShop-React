function hasUser(){
    return (req, res, next) => {
        if(!req.body.user){
            console.log(req.body);
        }
        if(req.body.user){ next() }
        else{ res.status(401).json({ message: 'Please LogIn' }) };
    }
};

function isGuest(){
    if(req.user){ res.status(400).json({ message: 'You are already logged In' }) }
    else{ next() };
};

module.exports = {
    hasUser,
    isGuest
}