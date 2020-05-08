# Template landing page

forloop.parentloop.counter doesn't work in liquid version jekyll, but works for django

## Important

AHREF and ID naming convention

For subgroups
id="{{ section.id }}-{{ group.subheading }}-sub-{{ forloop.index }}"

For normal content
id="{{ section.id }}-{{ group.subheading }}"


```html
{% for section in site.data.sections %}     <!-- no need for section data -->
{% for group in section.group %}            <!-- iterate through group -->
{% if group.subgroup %}                     <!-- check if there are subgroups first -->
    {% for subgroup in group.subgroup %}    <!-- iterate through subgroups -->
    <div class="popup" id="{{ section.id }}-{{ group.subheading }}-sub-{{ forloop.index }}">
        <div class="popup__content">
            <div class="popup__left">
                <div class="popup__webview">
                </div>
            </div>
            <div class="popup__right">
                <h2 class="heading-secondary heading-secondary--inline u-margin-bottom-medium">
                    {{ group.subheading }}
                </h2>
                <p class="paragraph">
                    {{ subgroup.caption }}
                </p>

                <!-- TEST -->
                <p class="test">
                    {{ section.id }}-{{ group.subheading }}-sub-{{ forloop.index }}
                </p>
            </div>
        </div>
    </div>
    {% endfor %}
{% else %}
    <div class="popup" id="{{ section.id }}-{{ group.subheading }}">
        <div class="popup__content">
            <div class="popup__left">
                <div class="popup__wbeview">

                </div>
            </div>
            <div class="popup__right">
                <h2 class="heading-secondary heading-secondary--inline u-margin-bottom-medium">
                    {{ group.subheading }}
                </h2>
                <p class="paragraph">
                    {{ group.caption }}
                </p>

                <!-- TEST -->
                <p class="test">
                    {{ section.id }}-{{ group.subheading }}
                </p>
            </div>
        </div>
    </div>
{% endif %}
{% endfor %}
{% endfor %}
```