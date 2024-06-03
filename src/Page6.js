import './Page6.css';
import { useRef} from 'react';

function Page6() {
  const ref = useRef(null);
  function downloadPdf() {
    ref.current.style.display="none";

    window.print();
    ref.current.style.display="block";
    

  }
  
  return (
    <div className='page'>
    <div className='title align_self_center width-100'>ПРОФЕССИОНАЛЬНОЕ СУЖДЕНИЕ <textarea  placeholder="НЕКОММЕРЧЕСКОЙ ОРГАНИЗАЦИИ «ХХХ»" className='text-font bold border-none padding-0 textarea-height large textarea'/>
    <br/>ПО ПОРЯДКУ ОТРАЖЕНИЯ ЦЕЛЕВОГО ФИНАНСИРОВАНИЯ, ПОЛУЧЕННОГО <textarea  placeholder="ОТ ПО СОГЛАШЕНИЮ " className='text-font bold border-none padding-0 textarea-height large textarea'/>
    <br/><textarea  placeholder="№" className='text-font bold border-none padding-0 textarea-height small textarea'/></div>
    <div className='date'>«<input className='small border-bottom cursive text-font'/>»<input className='middle border-bottom cursive text-font'/> 20<input className='small cursive border-bottom text-font'/>года</div>
    <br/>
    <table className='table'>
      <tbody>
        <tr>
          <td className='table_body_td vertical-align'>Дата, на которую выносится профессиональное суждение</td>
          <td className='table_body_td '>
            <textarea  placeholder="Дата г." className='text-font border-none padding-0 textarea-height-1 width-100 textarea'/>
          </td>
        </tr>
        <tr>
          <td className='table_body_td vertical-align'>Объект профессионального суждения</td>
          <td className='table_body_td text-align-justify'>Отражение в учете средств субсидии, 
          выделенной из <textarea  placeholder="федерального и регионального бюджета" className='text-font border-none padding-0 textarea-height large textarea'/> в рамках 
          Соглашения с <textarea  placeholder="YYY" className='text-font border-none padding-0 textarea-height middle textarea'/> <textarea  placeholder="№  от г." className='text-font border-none padding-0 textarea-height middle textarea'/> в 
          сумме <textarea  placeholder="XXX" className='text-font border-none padding-0 textarea-height middle textarea'/> рублей на предоставление <textarea  placeholder="..." className='text-font border-none padding-0 textarea-width vertical textarea text-align-justify'/> и признание их.</td>
        </tr>
        <tr>
          <td className='table_body_td vertical-align'>Заключение</td>
          <td className='table_body_td text-align-justify'>Признать средства субсидии, выделенной из федерального и <textarea  placeholder="регионального" className='text-font border-none padding-0 textarea-height large textarea'/> бюджета в рамках Соглашения <textarea  placeholder="YYY" className='text-font border-none padding-0 textarea-height middle textarea'/> <textarea  placeholder="№  от г." className='text-font bold border-none padding-0 textarea-height middle textarea'/>в 
          сумме <textarea  placeholder="XXX" className='text-font border-none padding-0 textarea-height middle textarea'/> рублей на предоставление <textarea  placeholder="..." className='text-font border-none padding-0 textarea-width vertical textarea text-align-justify'/> возвратными и отразить на счетах бухгалтерского учета 60320 Расчеты с акционерами, участниками, пайщиками.  
          </td>
        </tr>
        <tr>
          <td className='table_body_td vertical-align'>Обоснование профессионального суждения</td>
          <td className='table_body_td text-align-justify'>
            В соответствие с Разъяснением Банка России по вопросам, связанным с применением Положения Банка России от 25.10.2017 № 612-П «О порядке отражения на счетах бухгалтерского учета объектов бухгалтерского учета некредитными финансовыми организациями» (далее – Положение № 612-П),
            <br/>Положения Банка России от 01.10.2015 № 493-П «Отраслевой стандарт бухгалтерского учета некредитными финансовыми организациями операций по выдаче (размещению) денежных средств по договорам займа и договорам банковского вклада» (далее – Положение № 493-П) на 13 декабря 2018 года по вопросу отражения поступлений от учредителей предусмотрен следующий порядок бухгалтерского учета:
            <i>
              В случае если бюджетные средства поступают в МКК от учредителя, при определении того являются ли такие поступления взносом в капитал МКК, необходимо оценить вероятность и возможные основания для возврата полученных средств.
              <br/>Поступление денежных средств от учредителя МКК и от иных лиц при существовании обязанности МКК их вернуть приводит к признанию обязательства и отражается МКК бухгалтерской записью:
              <br/>Дебет счета № 20501 «Расчетные счета в кредитных организациях»
              <br/>Кредит счета № 60320 «Расчеты с акционерами, участниками, пайщиками» или счета № 47422 «Обязательства по прочим финансовым обязательствам
              <br/>Дебет счета № 71802 «Расходы, связанные с обеспечением деятельности», лицевой счет по учету расходов, для компенсации которых получены целевые средства (по соответствующим символам ОФР исходя из экономического содержания операции)
              <br/>Кредит счета соответствующих счетов расчетов.
              <br/>Фактическую оплату поставщикам и подрядчикам за выполненные работы МКК отражает бухгалтерской записью:
              <br/>Дебет счета соответствующих счетов расчетов
              <br/>Кредит счета № 20501 «Расчетные счета в кредитных организациях».
              <br/>В соответствии с пунктом 7.18 Приложения 2 к Положению № 486-П в первый рабочий день нового года остатки, отраженные на счетах по учету доходов и расходов отчетного года (№ 710 - № 719), подлежат переносу на счета доходов и расходов прошлого года (№ 720 - № 729).
              <br/>Согласно пункту 7.21 Приложения 2 к Положению № 486-П на дату подписания годовой бухгалтерской (финансовой) отчетности остатков на счетах № 720 - № 729 быть не должно. Перенос остатков со счетов по учету доходов и расходов прошлого года осуществляется на счет № 708 «Прибыль (убыток) прошлого года».
            </i>
            В связи  с тем, что средства субсидии на <textarea  placeholder="..." className='text-font border-none padding-0 textarea-width vertical textarea text-align-justify'/> по 
            окончанию отчетного периода подлежат возврату учредителю <textarea  placeholder="XXX" className='text-font border-none padding-0 textarea-height middle textarea'/> и 
            возврат их оценивается более <input placeholder="20" className='small border-none text-font text-align-right'/>%, указанные средства 
            в размере <textarea  placeholder="XXX" className='text-font border-none padding-0 textarea-height middle textarea'/> рублей признаются возвратными и подлежат отражению на счете бухгалтерского учета 60320 Расчеты с акционерами, участниками, пайщиками.
            </td>
        </tr>
      </tbody>
    </table>
    <br/>
    <div className='text-align-justify text-font  text-indent'>
      <textarea  placeholder="Главный бухгалтер:" className='text-font border-none padding-0 textarea-height width-100 textarea'/>
    </div>
    <div className='text-align-justify text-font  text-indent'>
      <textarea  placeholder="Генеральный директор:" className='text-font border-none padding-0 textarea-height width-100 textarea'/>
    </div>
    <br/>
    <button ref={ref} onClick = {downloadPdf}>
    Download PDF
    </button>
  </div>
  );
}

export default Page6;
