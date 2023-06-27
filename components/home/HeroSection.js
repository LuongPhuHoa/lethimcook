import React from 'react';
import classes from './HeroSection.module.scss';

function HeroSection() {
  return (
    <div className="row">
      <div className="col-3">
        <header className={classes.header}>
          <div id={classes.cover}>
            <form method="get" action="">
              <div className={classes.tb}>
                <div className={classes.td}>
                  <input type="text" placeholder="Search Ingredient" required />
                </div>
                <div className={classes.td} id={classes.s_cover}>
                  <button type="submit">
                    <div id={classes.s_circle} />
                    <span> </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </header>
        <section className={classes.section}>
          <div className={classes.ingredient_container}>
            <div className={classes.ingredient_category}>
              <div className={classes.ingredient_category_item_title}>Vegetables</div>
              <div className={classes.ingredient_category_items}>
                <div className={classes.ingredient_item}>Carrot</div>
                <div className={classes.ingredient_item}>Celery</div>
                <div className={classes.ingredient_item}>Cucumber</div>
                <div className={classes.ingredient_item}>Garlic</div>
                <div className={classes.ingredient_item}>Ginger</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-9">
        <header className={classes.header}>
          <div id={classes.cover}>
            <form method="get" action="">
              <div className={classes.tb}>
                <div className={classes.td}>
                  <input type="text" placeholder="Search Food Recipe" required />
                </div>
                <div className={classes.td} id={classes.s_cover}>
                  <button type="submit">
                    <div id={classes.s_circle} />
                    <span> </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </header>
        <section className={classes.section}>
          <div className={classes.ingredient_container}>
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
