/* Version: 16.0.10820.10000 */

Type.registerNamespace("Strings");
Strings.OfficeOM = function()
{
};
Strings.OfficeOM.registerClass("Strings.OfficeOM");
Strings.OfficeOM.L_APICallFailed = "Απέτυχε η κλήση API";
Strings.OfficeOM.L_APINotSupported = "Το API δεν υποστηρίζεται";
Strings.OfficeOM.L_ActivityLimitReached = "Το όριο δραστηριότητας συμπληρώθηκε.";
Strings.OfficeOM.L_AddBindingFromPromptDefaultText = "Επιλέξτε.";
Strings.OfficeOM.L_AddinIsAlreadyRequestingToken = "Το πρόσθετο απαιτεί ήδη ένα διακριτικό πρόσβασης.";
Strings.OfficeOM.L_AddinIsAlreadyRequestingTokenMessage = "Η λειτουργία απέτυχε επειδή αυτό το πρόσθετο απαιτεί ήδη διακριτικό πρόσβασης.";
Strings.OfficeOM.L_ApiNotFoundDetails = "Η μέθοδος ή ιδιότητα {0} είναι μέρος του συνόλου απαιτήσεων {1}, το οποίο δεν είναι διαθέσιμο στην δική σας έκδοση του {2}.";
Strings.OfficeOM.L_AppNameNotExist = "Το όνομα προσθέτου για {0} δεν υπάρχει.";
Strings.OfficeOM.L_AppNotExistInitializeNotCalled = "Η εφαρμογή {0} δεν υπάρχει. Δεν είναι δυνατή η κλήση του Microsoft.Office.WebExtension.Initialize(Reason).";
Strings.OfficeOM.L_AttemptingToSetReadOnlyProperty = 'Γίνεται προσπάθεια να οριστεί η ιδιότητα μόνο για ανάγνωση "{0}".';
Strings.OfficeOM.L_BadSelectorString = "Η συμβολοσειρά που περνά στον επιλογέα δεν είναι σωστά διαμορφωμένη ή δεν υποστηρίζεται.";
Strings.OfficeOM.L_BindingCreationError = "Σφάλμα δημιουργίας σύνδεσης";
Strings.OfficeOM.L_BindingNotExist = "Δεν υπάρχει η καθορισμένη σύνδεση.";
Strings.OfficeOM.L_BindingToMultipleSelection = "Οι μη συνεχόμενες επιλογές δεν υποστηρίζονται.";
Strings.OfficeOM.L_BrowserAPINotSupported = "Αυτό το πρόγραμμα περιήγησης δεν υποστηρίζει το API που ζητήθηκε.";
Strings.OfficeOM.L_CallbackNotAFunction = "Η επιστροφή κλήσης πρέπει να είναι τύπου συνάρτησης, ήταν τύπου {0}."
Strings.OfficeOM.L_CannotApplyPropertyThroughSetMethod = 'Δεν είναι δυνατή η εφαρμογή των αλλαγών στην ιδιότητα "{0}" μέσω μιας μεθόδου "object.set".';
Strings.OfficeOM.L_CannotNavigateTo = "Το αντικείμενο βρίσκεται σε θέση όπου δεν υποστηρίζεται η περιήγηση.";
Strings.OfficeOM.L_CannotRegisterEvent = "Δεν είναι δυνατή η καταχώρηση του προγράμματος χειρισμού συμβάντων.";
Strings.OfficeOM.L_CannotWriteToSelection = "Δεν είναι δυνατή η εγγραφή στην τρέχουσα επιλογή.";
Strings.OfficeOM.L_CellDataAmountBeyondLimits = "Σημείωση: Το πλήθος των κελιών σε έναν πίνακα προτείνεται να είναι κάτω από 20.000 κελιά.";
Strings.OfficeOM.L_CellFormatAmountBeyondLimits = "Σημείωση: Τα σύνολα μορφοποίησης που ορίζονται από μια κλήση Formatting API προτείνεται να είναι κάτω από 100.";
Strings.OfficeOM.L_CloseFileBeforeRetrieve = "Κλήση closeAsync στο τρέχον αρχείο πριν από την ανάκτηση άλλου.";
Strings.OfficeOM.L_CoercionTypeNotMatchBinding = "Ο καθορισμένος τύπος αναγκαστικής μετατροπής δεν είναι συμβατός με αυτόν τον τύπο σύνδεσης.";
Strings.OfficeOM.L_CoercionTypeNotSupported = "Ο καθορισμένος τύπος αναγκαστικής μετατροπής δεν υποστηρίζεται.";
Strings.OfficeOM.L_ColIndexOutOfRange = "Η τιμή δείκτη στήλης βρίσκεται εκτός της επιτρεπόμενης περιοχής. Χρησιμοποιήστε μια τιμή (0 ή υψηλότερη) η οποία θα είναι μικρότερη από το πλήθος των στηλών.";
Strings.OfficeOM.L_ConnectionFailureWithDetails = "Η αίτηση απέτυχε με κωδικό κατάστασης {0}, κωδικό σφάλματος {1} και το ακόλουθο μήνυμα σφάλματος: {2}";
Strings.OfficeOM.L_ConnectionFailureWithStatus = "Η αίτηση απέτυχε με κωδικό κατάστασης {0}.";
Strings.OfficeOM.L_CustomFunctionDefinitionMissing = "Μια ιδιότητα με αυτό το όνομα που αντιπροσωπεύει τον ορισμό της συνάρτησης πρέπει να υπάρχει στην κλάση Excel.Script.CustomFunctions.";
Strings.OfficeOM.L_CustomFunctionImplementationMissing = 'Η ιδιότητα με αυτό το όνομα στην κλάση Excel.Script.CustomFunctions, η οποία αντιπροσωπεύει τον ορισμό της συνάρτησης πρέπει να περιέχει μια ιδιότητα "call" που υλοποιεί τη συνάρτηση.';
Strings.OfficeOM.L_CustomFunctionNameCannotSplit = "Το όνομα της συνάρτησης πρέπει να περιέχει έναν μη κενό χώρο ονομάτων και ένα μη κενό σύντομο όνομα.";
Strings.OfficeOM.L_CustomFunctionNameContainsBadChars = "Το όνομα της συνάρτησης πρέπει να περιέχει μόνο γράμματα, ψηφία, χαρακτήρες υπογράμμισης και τελείες.";
Strings.OfficeOM.L_CustomXmlError = "Σφάλμα προσαρμοσμένης XML.";
Strings.OfficeOM.L_CustomXmlExceedQuotaMessage = "Το XPath περιορίζει την επιλογή στα 1024 στοιχεία.";
Strings.OfficeOM.L_CustomXmlExceedQuotaName = "Συμπλήρωση ορίου επιλογής";
Strings.OfficeOM.L_CustomXmlNodeNotFound = "Ο καθορισμένος κόμβος δεν βρέθηκε.";
Strings.OfficeOM.L_CustomXmlOutOfDateMessage = "Τα δεδομένα δεν είναι ενημερωμένα. Ανακτήσετε ξανά το αντικείμενο.";
Strings.OfficeOM.L_CustomXmlOutOfDateName = "Μη ενημερωμένα δεδομένα";
Strings.OfficeOM.L_DataNotMatchBindingSize = "Το αντικείμενο δεδομένων που δόθηκε δεν αντιστοιχεί στο μέγεθος της τρέχουσας επιλογής.";
Strings.OfficeOM.L_DataNotMatchBindingType = "Το καθορισμένο αντικείμενο δεδομένων δεν είναι συμβατό με τον τύπο σύνδεσης.";
Strings.OfficeOM.L_DataNotMatchCoercionType = "Ο τύπος του καθορισμένου αντικειμένου δεδομένων δεν είναι συμβατός με την τρέχουσα επιλογή.";
Strings.OfficeOM.L_DataNotMatchSelection = "Το αντικείμενο δεδομένων που δόθηκε δεν είναι συμβατό με το σχήμα ή τις διαστάσεις της τρέχουσας επιλογής.";
Strings.OfficeOM.L_DataReadError = "Σφάλμα ανάγνωσης δεδομένων";
Strings.OfficeOM.L_DataStale = "Μη ενημερωμένα δεδομένα";
Strings.OfficeOM.L_DataWriteError = "Σφάλμα εγγραφής δεδομένων";
Strings.OfficeOM.L_DataWriteReminder = "Υπενθύμιση εγγραφής δεδομένων";
Strings.OfficeOM.L_DialogAddressNotTrusted = "Ο τομέας του URL δεν περιλαμβάνεται στο στοιχείο AppDomains στη διακήρυξη.";
Strings.OfficeOM.L_DialogAlreadyOpened = "Η λειτουργία απέτυχε, επειδή αυτό το πρόσθετο έχει ήδη ένα ενεργό παράθυρο διαλόγου.";
Strings.OfficeOM.L_DialogInvalidScheme = "Ο συνδυασμός διευθύνσεων URL δεν υποστηρίζεται. Χρησιμοποιήστε εναλλακτικά το HTTPS.";
Strings.OfficeOM.L_DialogNavigateError = "Σφάλμα περιήγησης παραθύρου διαλόγου";
Strings.OfficeOM.L_DialogOK = "OK";
Strings.OfficeOM.L_DialogRequireHTTPS = "Το πρωτόκολλο HTTP δεν υποστηρίζεται. Χρησιμοποιήστε εναλλακτικά το HTTPS";
Strings.OfficeOM.L_DisplayDialogError = "Εμφάνιση σφάλματος παραθύρου διαλόγου";
Strings.OfficeOM.L_DocumentReadOnly = "Η λειτουργία που ζητήθηκε δεν επιτρέπεται στην τρέχουσα κατάσταση του εγγράφου.";
Strings.OfficeOM.L_ElementMissing = "Δεν μπορέσαμε να μορφοποιήσουμε το κελί πίνακα, επειδή λείπουν ορισμένες τιμές παραμέτρων. Επαναλάβετε τον έλεγχο των παραμέτρων και προσπαθήστε ξανά.";
Strings.OfficeOM.L_EventHandlerAdditionFailed = "Απέτυχε η προσθήκη του προγράμματος χειρισμού συμβάντων.";
Strings.OfficeOM.L_EventHandlerNotExist = "Το καθορισμένο πρόγραμμα χειρισμού συμβάντων δεν βρέθηκε για αυτήν τη σύνδεση.";
Strings.OfficeOM.L_EventHandlerRemovalFailed = "Απέτυχε η κατάργηση του προγράμματος χειρισμού συμβάντων.";
Strings.OfficeOM.L_EventRegistrationError = "Σφάλμα καταχώρησης συμβάντων";
Strings.OfficeOM.L_FileTypeNotSupported = "Ο καθορισμένος τύπος αρχείου δεν υποστηρίζεται.";
Strings.OfficeOM.L_FormatValueOutOfRange = "Η τιμή είναι εκτός της επιτρεπόμενης περιοχής.";
Strings.OfficeOM.L_FormattingReminder = "Υπενθύμιση μορφοποίησης";
Strings.OfficeOM.L_FunctionCallFailed = "Η κλήση συνάρτησης {0} απέτυχε, κωδικός σφάλματος: {1}.";
Strings.OfficeOM.L_GetDataIsTooLarge = "Το σύνολο δεδομένων που ζητήθηκε είναι πολύ μεγάλο.";
Strings.OfficeOM.L_GetDataParametersConflict = "Οι καθορισμένες παράμετροι παρουσιάζουν διένεξη.";
Strings.OfficeOM.L_GetSelectionNotSupported = "Η τρέχουσα επιλογή δεν υποστηρίζεται.";
Strings.OfficeOM.L_HostError = "Σφάλμα υποδοχής";
Strings.OfficeOM.L_InValidOptionalArgument = "μη έγκυρο προαιρετικό όρισμα";
Strings.OfficeOM.L_IndexOutOfRange = "Δείκτης εκτός περιοχής.";
Strings.OfficeOM.L_InitializeNotReady = "Η φόρτωση του Office.js δεν έχει ολοκληρωθεί ακόμη. Προσπαθήστε ξανά αργότερα ή προσθέστε τον κώδικα προετοιμασίας στη συνάρτηση Office.initialize.";
Strings.OfficeOM.L_InternalError = "Εσωτερικό σφάλμα";
Strings.OfficeOM.L_InternalErrorDescription = "Παρουσιάστηκε εσωτερικό σφάλμα.";
Strings.OfficeOM.L_InvalidAPICall = "Μη έγκυρη κλήση API";
Strings.OfficeOM.L_InvalidApiArgumentsMessage = "Μη έγκυρα ορίσματα εισόδου.";
Strings.OfficeOM.L_InvalidApiCallInContext = "Μη έγκυρη κλήση API στο τρέχον περιβάλλον.";
Strings.OfficeOM.L_InvalidArgument = 'Το όρισμα "{0}" δεν λειτουργεί για αυτή την περίπτωση, λείπει ή δεν έχει τη σωστή μορφή.';
Strings.OfficeOM.L_InvalidArgumentGeneric = "Τα ορίσματα που διαβιβάστηκαν στη συνάρτηση δεν λειτουργούν για αυτή την περίπτωση, λείπουν ή δεν έχουν σωστή μορφή.";
Strings.OfficeOM.L_InvalidBinding = "Μη έγκυρη σύνδεση";
Strings.OfficeOM.L_InvalidBindingError = "Παρουσιάστηκε σφάλμα μη έγκυρης σύνδεσης";
Strings.OfficeOM.L_InvalidBindingOperation = "Μη έγκυρη λειτουργία σύνδεσης";
Strings.OfficeOM.L_InvalidCellsValue = "Μία ή περισσότερες από τις παραμέτρους κελιών έχουν τιμές που δεν επιτρέπονται. Επαναλάβετε τον έλεγχο των τιμών και προσπαθήστε ξανά.";
Strings.OfficeOM.L_InvalidCoercion = "Μη έγκυρος τύπος αναγκαστικής μετατροπής";
Strings.OfficeOM.L_InvalidColumnsForBinding = "Οι καθορισμένες στήλες δεν είναι έγκυρες.";
Strings.OfficeOM.L_InvalidDataFormat = "Η μορφή του καθορισμένου αντικειμένου δεδομένων δεν είναι έγκυρη.";
Strings.OfficeOM.L_InvalidDataObject = "Μη έγκυρο αντικείμενο δεδομένων";
Strings.OfficeOM.L_InvalidFormat = "Σφάλμα μη έγκυρης μορφής";
Strings.OfficeOM.L_InvalidFormatValue = "Μία ή περισσότερες από τις παραμέτρους μορφοποίησης έχουν τιμές που δεν επιτρέπονται. Επαναλάβετε τον έλεγχο των τιμών και προσπαθήστε ξανά.";
Strings.OfficeOM.L_InvalidGetColumns = "Οι καθορισμένες στήλες δεν είναι έγκυρες.";
Strings.OfficeOM.L_InvalidGetRowColumnCounts = "Οι καθορισμένες τιμές της rowCount ή columnCount δεν είναι έγκυρες.";
Strings.OfficeOM.L_InvalidGetRows = "Οι καθορισμένες γραμμές δεν είναι έγκυρες.";
Strings.OfficeOM.L_InvalidGetStartRowColumn = "Οι καθορισμένες τιμές startRow ή startColumn δεν είναι έγκυρες.";
Strings.OfficeOM.L_InvalidGrant = "Λείπει η προεξουσιοδότηση.";
Strings.OfficeOM.L_InvalidGrantMessage = "Δεν έχει γίνει εκχώρηση δικαιωμάτων για αυτό το πρόσθετο.";
Strings.OfficeOM.L_InvalidNamedItemForBindingType = "Ο καθορισμένος τύπος σύνδεσης δεν είναι συμβατός με το καθορισμένο στοιχείο που δόθηκε.";
Strings.OfficeOM.L_InvalidNode = "Μη έγκυρος κόμβος";
Strings.OfficeOM.L_InvalidObjectPath = "Η διαδρομή αντικειμένου {0} δεν λειτουργεί για την ενέργεια που προσπαθείτε να κάνετε. Αν χρησιμοποιείτε το αντικείμενο σε πολλές κλήσεις context.sync και εκτός της σειριακής εκτέλεσης μιας δέσμης .run, χρησιμοποιήστε τις μεθόδους context.trackedObjects.add() και context.trackedObjects.remove() για να διαχειριστείτε τη διάρκεια ζωής του αντικειμένου.";
Strings.OfficeOM.L_InvalidOperationInCellEditMode = "Το Excel βρίσκεται σε λειτουργία επεξεργασίας κελιού. Τερματίστε τη λειτουργία επεξεργασίας, πατώντας το πλήκτρο ENTER ή TAB ή επιλέγοντας ένα άλλο κελί και, στη συνέχεια, προσπαθήστε ξανά.";
Strings.OfficeOM.L_InvalidOrTimedOutSession = "Μη έγκυρη περίοδος λειτουργίας ή λήξη χρονικού ορίου περιόδου λειτουργίας";
Strings.OfficeOM.L_InvalidOrTimedOutSessionMessage = "Η περίοδος λειτουργίας του Office Online έχει λήξει ή δεν είναι έγκυρη. Για να συνεχίσετε, ανανεώστε τη σελίδα.";
Strings.OfficeOM.L_InvalidParameters = "Η συνάρτηση {0} έχει μη έγκυρες παραμέτρους.";
Strings.OfficeOM.L_InvalidReadForBlankRow = "Η καθορισμένη γραμμή είναι κενή.";
Strings.OfficeOM.L_InvalidRequestContext = "Δεν είναι δυνατή η χρήση του αντικειμένου σε διαφορετικά περιβάλλοντα αίτησης.";
Strings.OfficeOM.L_InvalidResourceUrl = "Δόθηκε μη έγκυρη διεύθυνση Url πόρου εφαρμογής.";
Strings.OfficeOM.L_InvalidResourceUrlMessage = "Η διεύθυνση URL πόρου που έχει καθοριστεί στη διακήρυξη δεν είναι έγκυρη.";
Strings.OfficeOM.L_InvalidSSOAddinMessage = "Το API ταυτότητας δεν υποστηρίζεται για το πρόσθετο.";
Strings.OfficeOM.L_InvalidSelectionForBindingType = "Δεν είναι δυνατή η δημιουργία σύνδεσης με την τρέχουσα επιλογή και τον τύπο σύνδεσης που έχει οριστεί.";
Strings.OfficeOM.L_InvalidSetColumns = "Οι καθορισμένες στήλες δεν είναι έγκυρες.";
Strings.OfficeOM.L_InvalidSetRows = "Οι καθορισμένες γραμμές δεν είναι έγκυρες.";
Strings.OfficeOM.L_InvalidSetStartRowColumn = "Οι καθορισμένες τιμές startRow ή startColumn δεν είναι έγκυρες.";
Strings.OfficeOM.L_InvalidTableOptionValue = "Μία ή περισσότερες από τις παραμέτρους tableOptions έχουν τιμές που δεν επιτρέπονται. Επαναλάβετε τον έλεγχο των τιμών και προσπαθήστε ξανά.";
Strings.OfficeOM.L_InvalidValue = "Μη έγκυρη τιμή";
Strings.OfficeOM.L_MemoryLimit = "Έγινε υπέρβαση του ορίου μνήμης";
Strings.OfficeOM.L_MissingParameter = "Λείπει παράμετρος";
Strings.OfficeOM.L_MissingRequiredArguments = "απουσιάζουν κάποια απαιτούμενα ορίσματα";
Strings.OfficeOM.L_MultipleNamedItemFound = "Βρέθηκαν πολλά αντικείμενα με το ίδιο όνομα.";
Strings.OfficeOM.L_NamedItemNotFound = "Το καθορισμένο στοιχείο δεν υπάρχει.";
Strings.OfficeOM.L_NavOutOfBound = "Η λειτουργία απέτυχε επειδή ο δείκτης είναι εκτός περιοχής.";
Strings.OfficeOM.L_NetworkProblem = "Πρόβλημα δικτύου";
Strings.OfficeOM.L_NetworkProblemRetrieveFile = "Ένα πρόβλημα δικτύου εμπόδισε την ανάκτηση του αρχείου.";
Strings.OfficeOM.L_NewWindowCrossZone = 'Οι ρυθμίσεις ασφαλείας στο πρόγραμμα περιήγησης δεν επιτρέπουν τη δημιουργία ενός παραθύρου διαλόγου. Δοκιμάστε ένα διαφορετικό πρόγραμμα περιήγησης ή {0} ώστε ο τομέας "{1}" και ο τομέας που εμφανίζεται στη γραμμή διευθύνσεων να βρίσκονται στην ίδια ζώνη ασφαλείας.';
Strings.OfficeOM.L_NewWindowCrossZoneConfigureBrowserLink = "ρυθμίστε τις παραμέτρους του προγράμματος περιήγησης";
Strings.OfficeOM.L_NewWindowCrossZoneErrorString = "Οι περιορισμοί του προγράμματος περιήγησης δεν επιτρέπουν τη δημιουργία του παραθύρου διαλόγου. Ο τομέας του παραθύρου διαλόγου και ο τομέας του κεντρικού υπολογιστή του πρόσθετου δεν βρίσκονται στην ίδια ζώνη ασφαλείας.";
Strings.OfficeOM.L_NoCapability = "Δεν έχετε επαρκή δικαιώματα για αυτή την ενέργεια.";
Strings.OfficeOM.L_NonUniformPartialGetNotSupported = "Οι παράμετροι συντεταγμένων δεν είναι δυνατό να χρησιμοποιηθούν με πίνακα τύπου αναγκαστικής μετατροπής όταν ο πίνακας περιέχει συγχωνευμένα κελιά.";
Strings.OfficeOM.L_NonUniformPartialSetNotSupported = "Οι παράμετροι συντεταγμένων δεν είναι δυνατό να χρησιμοποιηθούν με πίνακα τύπου αναγκαστικής μετατροπής όταν ο πίνακας περιέχει συγχωνευμένα κελιά.";
Strings.OfficeOM.L_NotImplemented = "Η λειτουργία {0} δεν έχει υλοποιηθεί.";
Strings.OfficeOM.L_NotSupported = "Η συνάρτηση {0} δεν υποστηρίζεται.";
Strings.OfficeOM.L_NotSupportedBindingType = "Ο καθορισμένος τύπος σύνδεσης {0} δεν υποστηρίζεται.";
Strings.OfficeOM.L_NotSupportedEventType = "Ο καθορισμένος τύπος συμβάντος {0} δεν υποστηρίζεται.";
Strings.OfficeOM.L_OperationCancelledError = "Η λειτουργία ακυρώθηκε";
Strings.OfficeOM.L_OperationCancelledErrorMessage = "Η λειτουργία ακυρώθηκε από τον χρήστη.";
Strings.OfficeOM.L_OperationNotSupported = "Η λειτουργία δεν υποστηρίζεται.";
Strings.OfficeOM.L_OperationNotSupportedOnMatrixData = "Το επιλεγμένο περιεχόμενο πρέπει να είναι σε μορφή πίνακα. Μορφοποιήστε τα δεδομένα ως πίνακα και προσπαθήστε ξανά.";
Strings.OfficeOM.L_OperationNotSupportedOnThisBindingType = "Η λειτουργία δεν υποστηρίζεται σε αυτόν τον τύπο σύνδεσης.";
Strings.OfficeOM.L_OsfControlTypeNotSupported = "Ο τύπος OsfControl δεν υποστηρίζεται.";
Strings.OfficeOM.L_OutOfRange = "Εκτός περιοχής";
Strings.OfficeOM.L_OverwriteWorksheetData = "Η λειτουργία ορισμού απέτυχε επειδή το αντικείμενο δεδομένων που δόθηκε θα αντικαταστήσει ή θα μετακινήσει δεδομένα.";
Strings.OfficeOM.L_PermissionDenied = "Δεν έχετε δικαίωμα πρόσβασης";
Strings.OfficeOM.L_PropertyDoesNotExist = 'Η ιδιότητα "{0}" δεν υπάρχει στο αντικείμενο.';
Strings.OfficeOM.L_PropertyNotLoaded = 'Η ιδιότητα "{0}" δεν είναι διαθέσιμη. Πριν από την ανάγνωση της τιμής της ιδιότητας, πραγματοποιήστε κλήση της μεθόδου φόρτωσης στο περιέχον αντικείμενο και κλήση context.sync() στο συσχετισμένο περιβάλλον αίτησης.';
Strings.OfficeOM.L_ReadSettingsError = "Σφάλμα ρυθμίσεων ανάγνωσης";
Strings.OfficeOM.L_RedundantCallbackSpecification = "Η επιστροφή κλήσης δεν μπορεί να καθοριστεί ταυτόχρονα και στη λίστα ορισμάτων και στο προαιρετικό αντικείμενο.";
Strings.OfficeOM.L_RequestTimeout = "Η εκτέλεση της κλήσης καθυστέρησε.";
Strings.OfficeOM.L_RequestTokenUnavailable = "Αυτό το API έχει ρυθμιστεί για τη μείωση της συχνότητας κλήσης.";
Strings.OfficeOM.L_RowIndexOutOfRange = "Η τιμή δείκτη γραμμής βρίσκεται εκτός της επιτρεπόμενης περιοχής. Χρησιμοποιήστε μια τιμή (0 ή υψηλότερη) η οποία θα είναι μικρότερη από το πλήθος των γραμμών.";
Strings.OfficeOM.L_RunMustReturnPromise = "Η συνάρτηση δέσμης που διαβιβάστηκε στη μέθοδο .run δεν επέστρεψε υπόσχεση. Η συνάρτηση πρέπει να επιστρέφει υπόσχεση, ώστε να είναι δυνατή η αποδέσμευση τυχόν αντικειμένων που παρακολουθούνται αυτόματα κατά την ολοκλήρωση της λειτουργίας δέσμης. Συνήθως, η επιστροφή υπόσχεσης γίνεται με την επιστροφή της απόκρισης από το context.sync().";
Strings.OfficeOM.L_SSOClientError = "Παρουσιάστηκε σφάλμα στην αίτηση ελέγχου ταυτότητας από το Office.";
Strings.OfficeOM.L_SSOClientErrorMessage = "Παρουσιάστηκε μη αναμενόμενο σφάλμα στο πρόγραμμα-πελάτη.";
Strings.OfficeOM.L_SSOConnectionLostError = "Μια σύνδεση χάθηκε κατά τη διαδικασία εισόδου.";
Strings.OfficeOM.L_SSOConnectionLostErrorMessage = "Μια σύνδεση χάθηκε κατά τη διαδικασία εισόδου και ο χρήστης ενδέχεται να μην έχει εισέλθει. Η πιθανότερη αιτία είναι οι ρυθμίσεις του προγράμματος περιήγησης του χρήστη, για παράδειγμα, οι ζώνες ασφάλειας.";
Strings.OfficeOM.L_SSOServerError = "Παρουσιάστηκε σφάλμα στην υπηρεσία παροχής ελέγχου ταυτότητας.";
Strings.OfficeOM.L_SSOServerErrorMessage = "Παρουσιάστηκε μη αναμενόμενο σφάλμα στο διακομιστή.";
Strings.OfficeOM.L_SSOUnsupportedPlatform = "Το API δεν υποστηρίζεται σε αυτήν την πλατφόρμα.";
Strings.OfficeOM.L_SSOUserConsentNotSupportedByCurrentAddinCategory = "Αυτό το πρόσθετο δεν υποστηρίζει τη συγκατάθεση του χρήστη.";
Strings.OfficeOM.L_SSOUserConsentNotSupportedByCurrentAddinCategoryMessage = "Η λειτουργία απέτυχε, καθώς αυτό το πρόσθετο δεν υποστηρίζει τη συγκατάθεση του χρήστη σε αυτή την κατηγορία";
Strings.OfficeOM.L_SaveSettingsError = "Σφάλμα ρυθμίσεων αποθήκευσης";
Strings.OfficeOM.L_SelectionCannotBound = "Δεν είναι δυνατή η σύνδεση στην τρέχουσα επιλογή.";
Strings.OfficeOM.L_SelectionNotSupportCoercionType = "Η τρέχουσα επιλογή δεν είναι συμβατή με τον καθορισμένο τύπο αναγκαστικής μετατροπής.";
Strings.OfficeOM.L_SetDataIsTooLarge = "Το καθορισμένο σύνολο δεδομένων είναι πολύ μεγάλο.";
Strings.OfficeOM.L_SetDataParametersConflict = "Οι καθορισμένες παράμετροι παρουσιάζουν διένεξη.";
Strings.OfficeOM.L_SettingNameNotExist = "Δεν υπάρχει το όνομα της καθορισμένης ρύθμισης.";
Strings.OfficeOM.L_SettingsAreStale = "Δεν ήταν δυνατή η αποθήκευση των ρυθμίσεων, επειδή δεν είναι ενημερωμένες.";
Strings.OfficeOM.L_SettingsCannotSave = "Δεν ήταν δυνατή η αποθήκευση των ρυθμίσεων.";
Strings.OfficeOM.L_SettingsStaleError = "Σφάλμα μη ενημερωμένων ρυθμίσεων";
Strings.OfficeOM.L_ShowWindowDialogNotification = "Το πρόσθετο {0} θέλει να εμφανίσει ένα νέο παράθυρο.";
Strings.OfficeOM.L_ShowWindowDialogNotificationAllow = "Αποδοχή";
Strings.OfficeOM.L_ShowWindowDialogNotificationIgnore = "Παράβλεψη";
Strings.OfficeOM.L_ShuttingDown = "Η λειτουργία απέτυχε, επειδή τα δεδομένα στο διακομιστή δεν είναι ενημερωμένα.";
Strings.OfficeOM.L_SliceSizeNotSupported = "Το καθορισμένο μέγεθος φέτας δεν υποστηρίζεται.";
Strings.OfficeOM.L_SpecifiedIdNotExist = "Το καθορισμένο αναγνωριστικό δεν υπάρχει.";
Strings.OfficeOM.L_Timeout = "Έληξε το χρονικό όριο της λειτουργίας. ";
Strings.OfficeOM.L_TooManyArguments = "πάρα πολλά ορίσματα";
Strings.OfficeOM.L_TooManyIncompleteRequests = "Περιμένετε μέχρι να ολοκληρωθεί η προηγούμενη κλήση.";
Strings.OfficeOM.L_TooManyOptionalFunction = "πολλές προαιρετικές συναρτήσεις στη λίστα παραμέτρων";
Strings.OfficeOM.L_TooManyOptionalObjects = "πολλά προαιρετικά αντικείμενα στη λίστα παραμέτρων";
Strings.OfficeOM.L_UnknownBindingType = "Ο τύπος σύνδεσης δεν υποστηρίζεται.";
Strings.OfficeOM.L_UnsupportedDataObject = "Ο τύπος του αντικειμένου δεδομένων που δόθηκε δεν υποστηρίζεται.";
Strings.OfficeOM.L_UnsupportedEnumeration = "Μη υποστηριζόμενη απαρίθμηση";
Strings.OfficeOM.L_UnsupportedEnumerationMessage = "Η απαρίθμηση δεν υποστηρίζεται στην τρέχουσα εφαρμογή κεντρικού υπολογιστή.";
Strings.OfficeOM.L_UnsupportedUserIdentity = "Δεν υποστηρίζεται ο τύπος ταυτότητας χρήστη.";
Strings.OfficeOM.L_UnsupportedUserIdentityMessage = "Δεν υποστηρίζεται ο τύπος ταυτότητας του χρήστη.";
Strings.OfficeOM.L_UserAborted = "Ο χρήστης ματαίωσε την αίτηση συγκατάθεσης.";
Strings.OfficeOM.L_UserAbortedMessage = "Ο χρήστης δεν εκχώρησε τα δικαιώματα για το πρόσθετο.";
Strings.OfficeOM.L_UserClickIgnore = "Ο χρήστης επέλεξε να παραβλέψει το παράθυρο διαλόγου.";
Strings.OfficeOM.L_UserNotSignedIn = "Κανένας χρήστης δεν έχει συνδεθεί στο Office.";
Strings.OfficeOM.L_ValueNotLoaded = "Η τιμή του αντικειμένου αποτελέσματος δεν έχει φορτωθεί ακόμη. Πριν από την ανάγνωση της ιδιότητας τιμής, καλέστε το context.sync() στο συσχετισμένο περιβάλλον αίτησης.";