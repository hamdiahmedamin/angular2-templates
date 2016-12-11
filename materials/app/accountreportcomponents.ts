import {Component} from '@angular/core';

@Component({    
    selector: 'accountOverview',
    styleUrls: ["app/accountreportcomponents.css"],
    template: `
        <md-card>
        <md-card-header>
            <md-icon md-card-avatar>report</md-icon>
            <md-card-title>Account overview</md-card-title>
            <md-card-subtitle>December 2016</md-card-subtitle>
        </md-card-header>        
        <md-card-content>
            <div class="flextable">
              <div>
                <h3>Account no</h3>
                5588332AXT
              </div>
              <div>
                <h3>Ingoing value</h3>
                48000
              </div>
              <div>
                <h3>Outgoing value</h3>
                55000
              </div>
              <div>
                <h3>Cash</h3>
                3000
              </div>
            </div>
        </md-card-content>
      </md-card>
    `
})
export class AccountOverviewComponent {

}

@Component({    
    selector: 'accountChart',
    styleUrls: ["app/accountreportcomponents.css"],
    template: `
      <md-card>
        <md-card-header>
            <md-icon md-card-avatar>chart</md-icon>
            <md-card-title>Chart</md-card-title>
            <md-card-subtitle>Returns</md-card-subtitle>
        </md-card-header>        
        <md-card-content>
           <svg-linechart [datapoints]="datapoints" ></svg-linechart>
        </md-card-content>        
      </md-card>
    `
})
export class AccountChartComponent {
  datapoints : any = [
    [820623599000,101.4633],[823215599000,101.7404],[825721199000,104.3164],[828395999000,103.7287],[831074399000,111.9082],[833839199000,112.8478],[836258399000,115.5671],[838936799000,110.8807],[841701599000,113.6811],[844207199000,116.3905],[846889199000,119.3238],[849567599000,128.3127],[852245999000,131.6558],[855010799000,144.541],[857429999000,141.7181],[859931999000,139.8194],[862610399000,147.2114],[865288799000,160.2339],[867794399000,165.32],[870472799000,176.2024],[873151199000,177.3395],[875743199000,183.862],[878597999000,182.9879],[881017199000,174.4372],[883781999000,178.7786],[886460399000,173.4178],[888879599000,178.3825],[891467999000,191.134],[894319199000,198.4567],[896824799000,181.8484],[899330399000,182.4333],[902181599000,174.5612],[904687199000,125.7988],[907279199000,117.1218],[910047599000,139.495],[912553199000,125.5836],[915490799000,133.0253],[917909999000,140.4128],[920329199000,132.9845],[923435999000,143.5846],[925768799000,156.3499],[928274399000,155.631],[930866399000,155.7839],[933631199000,157.8972],[936223199000,165.2811],[938815199000,162.1016],[941497199000,158.6458],[944089199000,171.1707],[946940399000,192.7313],[949445999000,184.2105],[951951599000,193.7116],[954799199000,186.6209],[957304799000,185.3549],[959983199000,194.2545],[962661599000,197.7044],[965167199000,202.3479],[967845599000,220.604],[970523999000,215.5255],[973119599000,213.9708],[975711599000,196.2098],[978476399000,199.2077],[981068399000,202.184],[983487599000,195.8321],[986248799000,184.1792],[988840799000,195.8964],[991432799000,201.71],[994111199000,193.38],[996703199000,187.53],[999554399000,175.65],[1001973599000,144.76],[1004655599000,148.69],[1007420399000,157.93],[1010012399000,167.85],[1012604399000,163.95],[1015023599000,165.51],[1017784799000,180.06],[1020376799000,175.04],[1023141599000,164.99],[1025560799000,149.77],[1028239199000,136.71],[1031003999000,130.5],[1033509599000,110.8],[1036191599000,116.52],[1038869999000,127.99],[1041548399000,117.48],[1044313199000,109.69],[1046732399000,103.83],[1049234399000,103.59],[1051912799000,117.61],[1054591199000,127.4163],[1057096799000,133.034],[1059775199000,146.4633],[1062453599000,154.9362],[1065045599000,144.7831],[1067900399000,162.7043],[1070319599000,163.2671],[1073084399000,173.4619],[1075762799000,183.5535],[1078181999000,204.7946],[1080856799000,193.4511],[1083621599000,187.9626],[1086127199000,192.385],[1088719199000,206.1017],[1091483999000,202.9424],[1094075999000,204.8492],[1096667999000,223.187],[1099349999000,215.1749],[1101941999000,233.2402],[1104793199000,238.1031],[1107298799000,244.581],[1109717999000,260.0176],[1112392799000,258.3555],[1115071199000,245.1682],[1117663199000,261.7906],[1120255199000,285.4211],[1122933599000,298.3555],[1125611999000,319.2372],[1128376799000,329.8879],[1130885999000,298.9262],[1133477999000,319.6367],[1136242799000,332.9379],[1138834799000,359.4576],[1141253999000,370.2491],[1144101599000,399.949],[1146607199000,413.4212],[1149199199000,383.8447],[1151963999000,382.8089],[1154469599000,382.0166],[1157147999000,387.4451],[1159826399000,370.1419],[1162421999000,405.3569],[1165013999000,411.7327],[1167778799000,446.4608],[1170370799000,464.6608],[1172789999000,435.3163],[1175551199000,462.8558],[1178143199000,483.0425],[1180735199000,501.3771],[1183413599000,510.8074],[1186005599000,484.833],[1188856799000,475.3165],[1191275999000,498.4204],[1193957999000,507.1422],[1196722799000,487.7063],[1199314799000,491.294],[1201906799000,403.9009],[1204585199000,419.3875],[1207087199000,419.3349],[1209765599000,477.136],[1212443999000,497.1152],[1214949599000,455.1555],[1217627999000,412.0615],[1220306399000,417.2638],[1222898399000,308.5367],[1225753199000,253.8628],[1228172399000,202.7578],[1230937199000,239.2402],[1233615599000,216.8533],[1236034799000,205.848],[1238623199000,227.962],[1241474399000,266.0314],[1243979999000,305.349],[1246485599000,288.1084],[1249336799000,305.5251],[1251842399000,297.9725],[1254434399000,318.8708],[1257202799000,331.9881],[1259708399000,357.7513],[1262645999000,380.1554],[1265065199000,363.8917],[1267484399000,359.8696],[1270591199000,385.1228],[1272923999000,385.35],[1275429599000,344.31],[1278021599000,317.89],[1280786399000,369.65],[1283378399000,364.52],[1285970399000,382.72],[1288652399000,408.73],[1291244399000,407.86],[1294095599000,443.21],[1296601199000,442.18],[1299020399000,444.23],[1301695199000,451.41],[1304373599000,446.68],[1306965599000,437.39],[1309557599000,426.12],[1312235999000,411.71],[1314914399000,380.16],[1317679199000,334.75],[1320188399000,367.94],[1322780399000,378.59],[1325545199000,389.48],[1328137199000,404.6],[1330642799000,428.37],[1333403999000,430.93],[1335995999000,419.53],[1338587999000,377.66],[1341266399000,410.84],[1343858399000,422.91],[1346709599000,439.43],[1349128799000,452.23],[1351810799000,445.79],[1354575599000,442.14],[1357167599000,454.5],[1359759599000,470.69],[1362178799000,471.86],[1364939999000,475.02],[1367531999000,476.5],[1370296799000,488.51],[1372715999000,473.89],[1375394399000,497.77],[1378159199000,502.97],[1380664799000,503.33],[1383346799000,534.98],[1386025199000,542.37],[1388703599000,546.93],[1391468399000,534.71],[1393887599000,553.15],[1396389599000,560.14],[1399067999000,583.44],[1401746399000,610.79],[1404251999000,622.5],[1406930399000,606.16],[1409608799000,613.59],[1412200799000,602.84],[1415055599000,585.2],[1417474799000,564.17],[1420239599000,579.36],[1422917999000,601.8],[1425337199000,613.25],[1427925599000,622.16],[1430776799000,647.92],[1433195999000,645.14],[1435787999000,629.82],[1438639199000,639.73],[1441144799000,582.59],[1443736799000,586.11],[1446505199000,617.92],[1449010799000,632.46],[1451948399000,600.61],[1454367599000,556.7],[1456873199000,574.92],[1459547999000,569.79],[1462226399000,601.41],[1464818399000,611.63],[1467410399000,611.57],[1470088799000,610.55],[1472767199000,616.28],[1475531999000,622.64],[1478041199000,639.6],[1480633199000,662.79]
  ];
}
