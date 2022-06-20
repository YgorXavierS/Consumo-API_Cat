const myPromise = new Promise((resolvido,rejeitado)=>{
    window.setTimeout(()=>{
        resolvido('Done');
    },2000);
});