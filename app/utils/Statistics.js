
export default class Statistics {
    constructor(_dataset = []){
        if(_dataset.length == 0){
            this.dataset = null;
        }

        this.dataset = _dataset;
    }

    static sma(period){
        var smaData = [];
        return function (num){
            smaData.push(num);
            if(smaData.length > period){
                smaData.pop();
            }

            var sum = 0;
            var n = period;
            for ( var i in smaData){
                sum += smaData[i];
            }
            
            if(smaData.length < period){
                n = smaData.length;
                return (sum/n);
            }
            return (sum/period);
            
        }
    }

}



