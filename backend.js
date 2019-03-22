(function($) {
	$(function() {
		let template = ''+
		'<style type="text/css">'+
			'*{'+
			'  margin: 0;'+
			'  padding: 0;'+
			'}'+
			'.md_middle{'+
			'  border: 0 !important;'+
			'}'+
			'.mm_01{'+
			'  background-color: transparent !important;'+
			'}'+
			'svg{'+
			'    width: 15px;'+
			'    color: #757575;'+
			'}'+
		'</style>'+
		'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" \/>'+
		'<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"><\/script>'+
		'<script type="text/javascript" src="https://chass.ndhu.edu.tw/ezfiles/15/1015/img/626/photos.js"><\/script>'+
		'<div class="photos">'+
		'  <div class="up">'+
		'    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-angle-left fa-w-8"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" class=""><\/path><\/svg>'+
		'  </div>'+
		'  <div class="down">'+
		'    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-angle-right fa-w-8"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" class=""><\/path><\/svg>'+
		'  <\/div>'

		let input_template =$('<div class="card">')
			.append($('<input type="text" placeholder="點擊圖片的連結網址" class="alink">'))
			.append($('<input type="text" placeholder="照片網址" class="url">'))
			.append($('<input type="text" placeholder="標題文字" class="title">'))
			.append($('<textarea placeholder="內容簡述" class="description"></textarea>'))

		$('.area').append(input_template.clone())
		$('.btn_add').click(function() {
			$('.area').prepend(input_template.clone())
		})

		$('.btn_copy').click(function() {
			new ClipboardJS('.copybtn')
			let extension = ''	

			$('.card').each(function() {
				let alink = $(this).find('.alink').val()
				let url = $(this).find('.url').val()
				let title = $(this).find('.title').val()
				let description = $(this).find('.description').val()

				if(url !== '') {
					let html = '<div class="photo">'
					html += (alink === '') ? '<a href="" onclick="return false;">' : '<a href="' + alink+'">'
					html+='<img src="'+url+'" alt="'+title+'"></a>'
					html+='<div class="title">'+title+'</div>'
					html+='<div class="description">'+description+'</div>'
					html+='</div>'

					extension+=html
				}
			})
			$('.copybtn').attr({'data-clipboard-action':'copy','data-clipboard-text':template+extension})
			$('.copybtn').trigger('click')
			$('.showCopy').val(template + extension)
			
			alert('Copied')
		})
	})
})(jQuery)
