import { Component, Host, h, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'pu-date-picker',
  styleUrls: {
    md: 'pu-date-picker.md.scss'
  },
  shadow: true,
})
export class PuDatePicker {
  @State() activeMonth: string = "Jan";
  @Prop() months = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  @Prop() weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  @State() startingDayOfMonth: number;
  @State() endingDayOfActiveMonth: number = 31;
  @Listen('click', { capture: true })
  chooseMonth(el, index) {
    if (el.target.textContent) {
      this.startingDayOfMonth = (new Date(2023, index, 1).getDay());
      this.endingDayOfActiveMonth = (new Date(2023, index + 1, 0).getDate());
      this.activeMonth = el.target.textContent
    }
  }
  render() {
    return (
      <Host>
        <div class={"picker-button"}>
          <span class={"picker-button-text month"}>mm</span>
          <span class={"picker-button-text"}>/</span>
          <span class={"picker-button-text day"}>dd</span>
          <span class={"picker-button-text"}>/</span>
          <span class={"picker-button-text year"}>yyyy</span>
          <div class={"data-picker-desctop"}>
            <div class="header">
              <div class={"header-selects"}>
                <div class={"header-selects-icon"}>
                  <pu-icon>navigate_before</pu-icon>
                </div>
                <div class={"header-selects-month-slider"}>
                  <div class="dropdown">
                    <div class={"dropdown-item"}>
                      {this.activeMonth}
                      <pu-icon>arrow_drop_down</pu-icon>
                    </div>
                    <div class="dropdown-content">
                      {this.months.map((e, index) => <li onClick={(el) => this.chooseMonth(el, index)} key={index}>{e}</li>)}
                    </div>
                  </div>
                </div>
                <div class={"header-selects-icon"}>
                  <pu-icon>navigate_next</pu-icon>
                </div>
              </div>
              <div class={"header-selects"}>
                <div class={"header-selects-icon"}>
                  <pu-icon>navigate_before</pu-icon>
                </div>
                <div class={"header-selects-month-slider"}>
                  <div class="dropdown">
                    <div class={"dropdown-item"}>
                      {this.activeMonth}
                      <pu-icon>arrow_drop_down</pu-icon>
                    </div>
                    <div class="dropdown-content">
                      {this.months.map((e, index) => <li onClick={(el) => this.chooseMonth(el, index)} key={index}>{e}</li>)}
                    </div>
                  </div>
                </div>
                <div class={"header-selects-icon"}>
                  <pu-icon>navigate_next</pu-icon>
                </div>
              </div>
            </div>
            <div class="week-days">
              {this.weekDays.map((e, index) => (
                <div class={"week-days-text"}>
                  <span key={index}>{e}</span>
                </div>
              ))}
            </div>
            <div class={"days"}>
              <div class="days-wrapper">
                <span>1</span>
              </div>
              <div class="days-wrapper">
                <span>2</span>
              </div>
              <div class="days-wrapper">
                <span>3</span>
              </div>
              <div class="days-wrapper">
                <span>4</span>
              </div>
              <div class="days-wrapper">
                <span>5</span>
              </div>
              <div class="days-wrapper">
                <span>6</span>
              </div>
              <div class="days-wrapper">
                <span>7</span>
              </div>
              <div class="days-wrapper">
                <span>8</span>
              </div>
              <div class="days-wrapper">
                <span>9</span>
              </div>
              <div class="days-wrapper">
                <span>10</span>
              </div>
              <div class="days-wrapper">
                <span>11</span>
              </div>
              <div class="days-wrapper">
                <span>12</span>
              </div>
              <div class="days-wrapper">
                <span>13</span>
              </div>
              <div class="days-wrapper">
                <span>14</span>
              </div>
              <div class="days-wrapper">
                <span>15</span>
              </div>
              <div class="days-wrapper">
                <span>16</span>
              </div>
              <div class="days-wrapper">
                <span>17</span>
              </div>
              <div class="days-wrapper">
                <span>18</span>
              </div>
              <div class="days-wrapper">
                <span>19</span>
              </div>
              <div class="days-wrapper">
                <span>20</span>
              </div>
              <div class="days-wrapper">
                <span>21</span>
              </div>
              <div class="days-wrapper">
                <span>22</span>
              </div>
              <div class="days-wrapper">
                <span>23</span>
              </div>
              <div class="days-wrapper">
                <span>24</span>
              </div>
              <div class="days-wrapper">
                <span>25</span>
              </div>
              <div class="days-wrapper">
                <span>26</span>
              </div>
              <div class="days-wrapper">
                <span>27</span>
              </div>
              <div class="days-wrapper">
                <span>28</span>
              </div>
              <div class="days-wrapper">
                <span>29</span>
              </div>
              <div class="days-wrapper">
                <span>30</span>
              </div>
            </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
