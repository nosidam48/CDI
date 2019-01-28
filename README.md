# Centro de Dessarollo Infantil
Centro de Dessarollo Infantil (Child Development Center) is a charitable organization that oversees the health and development of at-risk boys and girls, providing help in four main areas:
  * Nutritional meals/dietary supplements as needed
  * Academic support (tutoring and support for the family with uniforms and school supplies)
  * Medical and dental care
  * Spiritual guidance
  
CDI is supported by monthly donors, whose gifts go to sponsor an individual child.

This web applicaton attempts to serve the following:
  * Prospective donors, by showing them information on current children who need a sponsor.
  * Current donors, by giving them a place to see updates and new photos of children they sponsor.
  * CDI workers, by giving them a place to add updates, photos and take care of other administrative tasks. CDI workers are busy taking care of children and don't have a lot of time for administrative work, so it's important that this app makes the administrative tasks as easy and clear as possible. Access to reliable computers can be difficult as well, but smartphones are more abundant, so the app should be able to be used easily on a mobile device as well.

## Prospective Donor features
  * On the home page, the donor will see an introduction to the CDI program, as well as a sidebar that shows two children who are in need of a sponsor.
  * The sidebar randomly chooses two unsponsored children to display.
  * The prospective donor can also go to the /kids page to see a photo and brief info for all of the unsponsored children.
  * The user can filter search results by location, gender and age.
  * Each kid bio has a link to learn more about them. This takes the user to a page displaying the individual child's information.
  * On the individual child's page, more information is included, as well as a photo gallery of any photos of the child.
  
## Current Donor features
  * Current donors will create an account so they can access information about the children they sponsor.
  * When logged in, clicking on the donors page will show the donor the information for all the kids they sponsor. 
  * This page will also show any updates that have been posted for each child.
  
## Admin features
  * CDI workers with admin privileges have access to several tools to help them manage children and donors.
  ### Add a child
   * The admin fills out a form with the new child's information and adds a profile image. This child will now appear in the list of unsponsored children that prospective donors are able to see.
  ### Update a child
   * The admin first finds the child they'd like to update by either searching by name or location.
   * Once the child is found, the admin has several options available
  ### Update info
   * A modal appears that includes the information that is currently in the child's profile. The admin can make any changes necessary and submit. Those new changes will edit the child's entry in the database.
  ### Add content
   * A modal appears that lets the admin add a text update to the child or add a new photo. On submit, a new entry is created in the Content table that includes the selected kid's ID.
  ### Connect donor to child
   * When a donor has decided to sponsor a child, an admin can find the child and click Connect to Donor. A modal appears, prompting the admin to search for a donor by name or email.
   * The search displays all donors that match the search criteria. When the submit button is clicked next to the donor's name, a record is created in the KidsUsers table that connects the donor and child.
  ### Remove child
   * A modal appears asking the admin to verify that they want to remove the child. When the button is clicked, the child's record is removed from the Kids table.
  
## Technical Features
  
