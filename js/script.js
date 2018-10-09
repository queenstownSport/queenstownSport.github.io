const SECTION_SPORT_SELECT_CLASS = ".section_sport_select";
const SPORT_TYPE_CLASS = ".sport_type";
const SPORT_LABEL_CLASS = ".sport_label";
const SPORT_ITEM_CLASS = ".sport_item";

const sportTypeList = document.querySelectorAll(SPORT_TYPE_CLASS);
const sportItemList = document.querySelectorAll(SPORT_ITEM_CLASS);

var sportSelected = "";

init();

$(SECTION_SPORT_SELECT_CLASS).hover(
  function() {
    sportSelectHover(true);
  },
  function() {
    sportSelectHover(false);
  }
);

$(SPORT_TYPE_CLASS).hover(
  function() {
    sportTypeHover(this.id);
  },
  function() {
    sportTypeHover(this.id, false);
  }
);

$(SPORT_ITEM_CLASS).hover(
  function() {
    sportItemHover(this.id);
  },
  function() {
    sportItemHover(this.id);
  }
);

function init() {
  sportSelectHover();
  setSportItemClick();
}

function setSportItemClick() {
  sportItemList.forEach(sportItem => {
    sportItem.onclick = function() {
      console.log(sportItem.id);
    };
  });
}

function sportSelectHover(isHover = false) {
  sportTypeList.forEach(element => {
    if (isHover) {
      element.classList.remove("grayScale");
    } else {
      if (element.id != sportSelected) {
        element.classList.add("grayScale");
      }
    }
  });
}

function sportTypeHover(id, isHover = true) {
  sportSelected = id;

  sportTypeList.forEach(element => {
    let sportLabel = $("#" + element.id + " " + SPORT_LABEL_CLASS);

    if (element.id == id) {
      if (isHover) {
        sportLabel.stop(true, true).fadeOut();
      } else {
        sportLabel.stop(true, true).fadeIn();
      }
    } else {
      var h1 = document.querySelector("#" + element.id + " h1");
      h1.classList.toggle("overlay");
    }
  });
}

function sportItemHover(id) {}
