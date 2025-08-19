function updateCourseTime() {
  // Split the body parameters
  const bodyParams = {
    itemId: "685ba6b0b03c1a0731806073", // change itemId here
    time: "60",
    // watchedVideoDuration: "487.989212"
  };

  // Convert to URL-encoded string
  const body = new URLSearchParams(bodyParams).toString();

  fetch("https://www.arthnirmiti.com/s/courses/685fd51a70fec24fec36c948/time/update", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      // change cookie value here
      "cookie": "id=0c55e18b-5d22-4162-ae96-3ce953a1f800; _ga=GA1.1.453452741.1755506272; _gcl_au=1.1.1938045154.1755506272; SESSIONID=E3B1742E56016C14B4C2545BBC95DED9; org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=en; _clck=1ghjuy1%7C2%7Cfyl%7C0%7C2056; c_login_token=1752043245370; amp_e56929_arthnirmiti.com=g-P5EShrUkMYFvnMXS_Typ.Njg2ZTBlZWRmYjY2NDMzYjZmYWJlOGY3..1j30unp3h.1j30unp3r.9.c.l; _ga_K65QMQ71M6=GS2.1.s1755600117$o3$g1$t1755600130$j47$l0$h0; _ga_QBNBN7VB0P=GS2.1.s1755600117$o3$g1$t1755601684$j59$l0$h0; _clsk=pkq7u3%7C1755603760356%7C1%7C0%7Cy.clarity.ms%2Fcollect; amp_e56929=g-P5EShrUkMYFvnMXS_Typ.Njg2ZTBlZWRmYjY2NDMzYjZmYWJlOGY3..1j3126vgf.1j3126vgf.1.i.j",
      "Referer": "https://www.arthnirmiti.com/s/courses/685fd51a70fec24fec36c948/take"
    },
    "body": body,
    "method": "POST"
  })
  .then(response => {
    if (response.ok) {
      console.log('Course time updated successfully');
      return response.json();
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  })
  .then(data => {
    console.log('Response data:', data);
  })
  .catch(error => {
    console.error('Error updating course time:', error);
  });
}

// Execute the function 60 times
for (let i = 0; i < 60; i++) {
  console.log(`Running update ${i + 1}/60`);
  updateCourseTime();
}