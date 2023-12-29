
exports.getDashboard = (req,res,next) => {
    res.render('dashboard',{
        pageTitle: 'Dashboard',
        path: '/dashboard'
    })
}