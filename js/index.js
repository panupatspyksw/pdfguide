
var base64arrimage


// url can be './folder/image/js  /image/media/example.jpg or https://www.tarkett-asia.com/media/img/M/TH_3917011_3707003_3708011_3912011_3914011_800_800.jpg'
const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob); 
      reader.onloadend = function() {
        const base64data = reader.result;   
        resolve(base64data);
      }
    });
}



function initpdf(){

    var bodyfontsize = 12;
    var dott = {decoration: "underline", decorationStyle: "dotted"}
    // [left,top,right,bottom]
    var rowgap = [0, 0, 0, 10]
    var suanngan = "วิทยาลัยนวัตกรรมสื่อสารสังคม  มหาวิทยาลัยศรีนครินทรวิโรฒ";
    var phone = "11266";
    var address = "อว 8719.1/";
    var title = "ขอความอนุเคราะหGบันทึกชั่วโมงจิตอาสาให้แก่นิสิต";
    var to = "รองอธิการบดีฝ่ายพัฒนาศักยภาพนิสิต"
    var p1 = `
                    ด้วย วิทยาลัยนวัตกรรมสื่อสารสังคม มหาวิทยาลัยศรีนครินทรวิโรฒ ได้ดำเนินการจัด 
    “โครงการส่งเสริมคุณธรรม จริยธรรม และเสริมสร้างทัศนคติที่ดี : กิจกรรมนวัตกรรมแรกพบ”  
    เมื่อวันที่ 20 กรกฎาคม 2563 ณ ห้อง 401 ชั้น 4 อาคารวิทยาลัยนวัตกรรมสื่อสารสังคม ที่ผ่านมา 
    โดยกิจกรรมดังกล่าวยังมีนิสิตที่ตกหล่นจากการบันทึกชั่วโมงจิตอาสา นั้น\n
                    ในการนี้ ฝ่ายพัฒนาศักยภาพนิสิต วิทยาลัยนวัตกรรมสื่อสารสังคม จึงใคร่ขอความอนุเคราะห์  
    บันทึกกิจกรรมดังกล่าวให้แก่นางสาวธัญชนก เสาร์คำ รหัสนิสิต 62130010373 นิสิตชั้นปีที่ 2 
    วิชาเอกการสื่อสารเพื่อสุขภาพ ซึ่งนิสิตได้เข้าร่วมกิจกรรมดังกล่าวเป็นที่เรียบร้อยแล้ว (รายละเอียด
    ดังเอกสารแนบ)\n
                    จึงเรียนมาเพื่อโปรดพิจารณาอนุเคราะห์ จะขอบคุณยิ่ง
    `;
    var signature1 = `
    (อาจารย์ ดร.รินบุญ นุชน้อมบุญ)
    รองคณบดีฝ่ายพัฒนาศักยภาพนิสิต `;
    
    var signature2 = `
    (ผู้ช่วยศาสตราจารย์ ดร.นพดล อินทร์จันทร์)
     คณบดีวิทยาลัยนวัตกรรมสื่อสารสังคม`


    // info of document
    var info =  {
	title: 'PDF_DOCUMENT',
	author: 'panupat sriphayakswet',
	subject: 'document',
	keywords: 'document',
    }



    const pdfdoc = {
        info,
        content: [
            // start page 1
            {
                text: 'บันทึกข้อความ\n ',
                style: 'header',
                alignment: 'center'
            },
            {
                alignment: 'justify',
                columns: [
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                text: 'ส่วนงาน',
                                width: 'auto',
                                style: 'subheader'
                            },
                            {
                                text: suanngan,
                                width: '350'
                            }
                        ],
                        width: "85%"
                    },
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                text: 'โทร.',
                                width: 'auto',
                                style: 'subheader'
                            },
                            {
                                text: phone,
                                width: 'auto'
                            }
                        ],
                        width: "auto"
                    }
                ],
                margin : rowgap
            },
            {
                alignment: 'justify',
                columns: [
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                text: 'ที่',
                                width: 'auto',
                                style: 'subheader'
                            },
                            {
                                text: address,
                                width: '350'
                            }
                        ],
                    },
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                text: 'วันที่',
                                width: 'auto',
                                style: 'subheader'
                            },
                            {
                                text: phone,
                                width: 'auto'
                            }
                        ],
                    }
                ],
                margin : rowgap
            },
            {
                alignment: 'justify',
                columns: [
                    {
                        text: 'เรื่อง',
                        width: 'auto',
                        style: 'subheader'
                    },
                    {
                        text: title,
                        width: 'auto'
                    }
                ],
                margin : rowgap
            },
            {
                alignment: 'justify',
                columns: [
                    {
                        text: 'เรียน',
                        width: 'auto',
                        style: 'subheader'
                    },
                    {
                        text: to,
                        width: 'auto'
                    }
                ],
                margin : rowgap
            },
            {
                text: p1
            },
            {
                text: signature1,
                alignment: "center",
                width: "100%",
                margin: [150, 100, 0, 0]
    
            },
            {
                text: signature2,
                alignment: "center",
                width: "100%",
                margin: [150, 100, 0, 0]
            },
            // end paage 1
            // start page 2
            {
                text: 'ภาพการเข้าร่วมกิจกรรมและจัดเตรียมงาน\n ',
                style: 'subheader',
                alignment: 'center',
                pageBreak: 'before',
                margin: [0,0,0,0]
            },
            ...base64arrimage.map((e)=>{
                return { image: e ,  margin: [0,10,0,10], alignment: "center", fit: [400, 400]}  //fit: [ max width,  max height]
            })
            // end page 2
           
        ],
        styles: {
            header: {
                fontSize: 20,
                bold: true
            },
            subheader: {
                fontSize: bodyfontsize,
                margin: [0, 0, 10, 0],
                bold: true
            }
        },
        defaultStyle: {
            font: 'Sarabun',
            fontSize: bodyfontsize,
            preserveLeadingSpaces: true // set for use empty space in text
        }
    }
    
    pdfMake.fonts = {
    Sarabun: {
        normal: 'Sarabun-Regular.ttf',
        bold: 'Sarabun-Bold.ttf'
    }
    };
    
    
    $("[pdfpreview]").on("click",()=>{
        pdfMake.createPdf(pdfdoc).open();
    
    })
    
    $("[pdfdownload]").on("click",()=>{
        pdfMake.createPdf(pdfdoc).download(info.title+".pdf");
    })


}


async function init(){
    // get base 64 image from array string image from window.images on index.html

    // promise for get base64image in base64arrimage
    if(window.images.length){
        base64arrimage = await Promise.all(
                window.images.map(async (e)=>{
                return await getBase64FromUrl(e)
                })
        ) 
    }


    // then install data for pdf 
    await initpdf()
}


init()





