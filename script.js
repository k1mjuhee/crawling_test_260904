const dynamicBooks = document.querySelector("#dynamic-books");
dynamicBooks.innerHTML = `
 <div class="book" data-category="python" data-id="book01">
        <img
          src="https://picsum.photos/seed/book1/200/250"
          alt="셀레니움"
          class="book-img"
        />
        <h2 class="title">Selenium 브라우저 자동화</h2>
        <p class="author">최작가</p>
        <p class="publisher">셀레출판사</p>
        <span class="price">32,000원</span>
        <span class="rating">4.5</span>
        <a href="book04.html" class="detail">상세보기</a>
      </div>
`;
