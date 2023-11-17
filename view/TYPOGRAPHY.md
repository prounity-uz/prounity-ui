# dp bilan sp farqlanmaydi va o'zgartirishlarga tayyor bazibir ekran hajmlari uchun
# 1dp = 0.0625rem = 1sp = 1pt = 1px = 1/160in = 1/16ft = 1/12yd = 1/96cm = 1/2.54mm
# pt bilan berilgan uzgaruvchilar ekranga qarab keyinchalik moslashtiriladi
O'zgaruvchuni o'zgartirish uchun umumiy stylega klass berganda qushib ketamiz yani
har bir yozilgan dp uchun rem qo'shib ketamiz

.display-1 (
  --font-family: Roboto;
  --font-weight: 400;
  --font-size: 57pt;
  --letter-spacing: -0.25pt; (andriod/ios)
  --line-height: 64pt;
)

.label (
  --sm(

  )
  
  --md(
    --font-family: Roboto;
    --font-weight: 500;
    --font-size: 12pt;
    --letter-spacing: 0.5pt;
    --line-height: 16pt;
  )

  --lg(

  )
)

body-lg