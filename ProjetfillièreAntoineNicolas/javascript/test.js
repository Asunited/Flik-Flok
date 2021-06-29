<script>
        function imagefun(){   
            var Image_Id = document.getElementById('getImage');
            if (Image_Id.src.match("imageName1.jpg")) {
                Image_Id.src = "imageName2.jpg";
            }
            else {
                Image_Id.src = "imageName1.jpg";
            }
        }        
    </script>